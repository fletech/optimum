import React from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Services from "../components/services";
import SectionDefault from "../components/sectionDefault";
import SectionHeading from "../components/sectionHeading";
import Seo from "../components/seo";

import { fetchAPI } from "../lib/api";
import { selectAnImage } from "../lib/utils";

const Home = ({ homepage, images }) => {
  const { heroTitle, heroSubtitle, heroDescription, coverTitle } =
    homepage.attributes.hero;
  const coverImage = selectAnImage(images, coverTitle);
  console.log(coverImage);
  //TODO: reemplazar el llamado a la API con context, en cada componente que se pueda.
  //Evitar getStaticProps, solo para hacer llamado a api que ya se hizo. Sí vale la pena en el llamado por imagenes por ejemplo

  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      <Hero
        coverImage={coverImage}
        heroTitle={heroTitle}
        heroSubtitle={heroSubtitle}
        heroDescription={heroDescription}
      />
      <Banner />
      <Services />
      <SectionDefault display={"flex flex-col items-center"}>
        <SectionHeading
          topHeadline={"por qué"}
          mainHeadline={"elegirnos?"}
          textColor={"text-HL_blue"}
        />
      </SectionDefault>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepageRes] = await Promise.all([
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
        banner: "*",
      },
    }),
  ]);

  const [imagesRes] = await Promise.all([
    fetchAPI("/images", {
      populate: ["image"],
    }),
  ]);

  return {
    props: {
      homepage: homepageRes.data,
      images: imagesRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
