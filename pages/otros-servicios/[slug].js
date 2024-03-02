import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import ServiceDescription from "../../components/serviceDescription";
import { content } from "../../lib/content";

// import { useRouter } from "next/router";
// import Modal from "react-modal";
// Modal.setAppElement("#__next");

const ServicePage = ({ slug, homepage, serviceRequested }) => {
  // const router = useRouter();

  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <ServiceDescription serviceRequested={serviceRequested} />
    </Layout>
  );
};

export async function getStaticProps(context) {
  let { slug } = context.params;
  const homepageRes = content.homepage;
  // REEMPLAZO
  // const [homepageRes] = await Promise.all([
  //   fetchAPI("/homepage", {
  //     populate: {
  //       hero: "*",
  //       seo: { populate: "*" },
  //       banner: "*",
  //     },
  //   }),
  // ]);

  const serviceRequested = content.services.data.find(
    (element) => element.attributes.slug === slug
  );

  return {
    props: {
      slug,
      homepage: homepageRes,
      serviceRequested: serviceRequested ? serviceRequested.attributes : null,

      // homepage: homepageRes.data,
    },
  };
}

export async function getStaticPaths() {
  const servicesRes = content.services;
  return {
    paths: servicesRes.data.map((service) => {
      return {
        params: {
          slug: service.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default ServicePage;
