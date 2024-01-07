import React from "react";

import Landing from "../components/landing";
import Layout from "../components/layout";

import { fetchAPI } from "../lib/api";

const Home = () => {
  // const Home = ({ homepage, images }) => {
  //TODO: HACER UN JSON APARTE CON LOS TITULOS, Y TEXTOS QUE NO VIENEN DESDE STRAPI

  return (
    <Layout>
      <Landing />
    </Layout>
  );
};

//Evitar getStaticProps, solo para hacer llamado a api que ya se hizo. Sí vale la pena en el llamado por imagenes por ejemplo
// export async function getStaticProps() {
//   // Run API calls in parallel
//   const [homepageRes] = await Promise.all([
//     fetchAPI("/homepage", {
//       populate: {
//         hero: "*",
//         seo: { populate: "*" },
//         banner: "*",
//       },
//     }),
//   ]);

//   const [imagesRes] = await Promise.all([
//     fetchAPI("/images", {
//       populate: ["image"],
//     }),
//   ]);

//   return {
//     props: {
//       homepage: homepageRes.data,
//       images: imagesRes.data,
//     },
//     revalidate: 1,
//   };
// }

export default Home;
