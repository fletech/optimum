import Banner from "./banner";
import Branding from "./branding";
import Contact from "./contact";
import Customers from "./customers";
import Hero from "./hero";
import Seo from "./seo";
import Services from "./services";
import Stats from "./stats";
import Testimonials from "./testimonials";

const Landing = ({ homepage, images }) => {
  return (
    <>
      <Seo seo={homepage.attributes.seo} />
      <Hero homepage={homepage} images={images} />
      <Banner />
      <Services />
      <Branding />
      <Customers />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Landing;
