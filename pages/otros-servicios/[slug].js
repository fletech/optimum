import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import ServiceDescription from "../../components/serviceDescription";

// import { useRouter } from "next/router";
// import Modal from "react-modal";
// Modal.setAppElement("#__next");

const ServicePage = ({ homepage, serviceRequired }) => {
  // const router = useRouter();
  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      <ServiceDescription serviceRequired={serviceRequired} />
    </Layout>
  );
};

export async function getStaticProps(context) {
  let { slug } = context.params;
  const [homepageRes] = await Promise.all([
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
        banner: "*",
      },
    }),
  ]);
  const servicesRes = await fetchAPI(`/services/${slug}`, { populate: "*" });
  console.log(servicesRes.data.attributes.logo);

  return {
    props: {
      slug,
      homepage: homepageRes.data,
      serviceRequired: servicesRes.data.attributes,
    },
  };
}

export async function getStaticPaths() {
  const servicesRes = await fetchAPI("/services");
  const OTHERS_SERVICES = servicesRes.data.filter(
    (service) => service.attributes.type == "alliance"
  );

  return {
    paths: OTHERS_SERVICES.map((service) => {
      return {
        params: {
          slug: service.attributes.slug.toString(),
        },
      };
    }),
    fallback: false,
  };
}

export default ServicePage;
