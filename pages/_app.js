import App from "next/app";
import { useState } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import ServiceModal from "../components/serviceModal";
import "../styles/globals.css";
import "../styles/Banner.css";
import "../styles/Slider.css";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import { content } from "../lib/content";

// Store Strapi Global object in context
export const GlobalContext = createContext({});
const MyApp = ({ Component, pageProps }) => {
  const { global, homepage, images, services, branding, contact, customers } =
    pageProps;
  let [modal, setModal] = useState(false);

  return (
    <>
      <Head>
        {/* <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        /> */}
      </Head>
      <GlobalContext.Provider
        value={{
          global,
          homepage,
          images,
          services,
          branding,
          contact,
          customers,
          modal,
          setModal,
        }}
      >
        <Component {...pageProps} />
        {/* <ServiceModal /> */}
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  //Fetch global site settings from Strapi
  {
    /* REEMPLAZO */
  }

  // const globalRes = await fetchAPI("/global", {
  //   populate: {
  //     siteName: "*",
  //     favicon: "*",
  //     defaultSeo: {
  //       populate: "*",
  //     },
  //   },
  // });

  // const homepageRes = fetchAPI("/homepage", {
  //   populate: "*",
  // });

  // const servicesRes = content.services;

  // const brandingRes = await fetchAPI("/brandings", {
  //   populate: "*",
  // });

  // const contactRes = await fetchAPI("/contact", {
  //   populate: "*",
  // });
  // const customersRes = await fetchAPI("/customers", {
  //   populate: "*",
  // });

  //TODO: hacer un llamado a la API de strapi por cada endpoint y almacenarla en el context.
  //TODO: investigar si se puede.+

  const data = {
    global: content.global,
    homepage: content.homepage,
    branding: content.brandings,
    contact: content.contact,
    customers: content.customers,
  };

  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: {
      homepage: content.homepage,
      branding: content.branding,
      services: content.services,
      customers: content.customers,
    },
  };
};

export default MyApp;
