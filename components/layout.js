import React from "react";
import Footer from "./footer";
import FloatingContact from "./floatingContact";
import Nav from "./nav";

const Layout = ({ children, categories, seo }) => {
  return (
    <div className="relative">
      <Nav />
      {children}
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Layout;
