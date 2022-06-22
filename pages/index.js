import React from "react";

import Banner from "../components/banner";
import Branding from "../components/branding";
import Contact from "../components/contact";
import Customers from "../components/customers";
import FloatingContact from "../components/floatingContact";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Services from "../components/services";
import Stats from "../components/stats";
import Testimonials from "../components/testimonials";

import { fetchAPI } from "../lib/api";
import { selectAnImage } from "../lib/utils";

const Home = ({ homepage, images }) => {
  const { heroTitle, heroSubtitle, heroDescription, coverTitle } =
    homepage.attributes.hero;
  const coverImage = selectAnImage(images, coverTitle);
  //console.log(coverImage);
  //TODO: reemplazar el llamado a la API con context, en cada componente que se pueda. HECHO
  //TODO: HACER UN JSON APARTE CON LOS TITULOS, Y TEXTOS QUE NO VIENEN DESDE STRAPI
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
      <Branding />
      <Customers />
      <Stats />
      <Testimonials />
      <Contact />
      <FloatingContact />
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
