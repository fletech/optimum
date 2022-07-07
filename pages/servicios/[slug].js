import SectionDefault from "../../components/sectionDefault";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import ServiceDescription from "../../components/serviceDescription";

// import { useRouter } from "next/router";
// import Modal from "react-modal";
// Modal.setAppElement("#__next");

const ServicePage = ({ slug, homepage }) => {
  // const router = useRouter();

  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      <ServiceDescription />
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

  return {
    props: {
      slug,
      homepage: homepageRes.data,
    },
  };
}

export async function getStaticPaths() {
  const servicesRes = await fetchAPI("/services");
  return {
    paths: servicesRes.data.map((service) => {
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
