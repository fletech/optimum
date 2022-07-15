import React from "react";
import Footer from "./footer";
import FloatingContact from "./floatingContact";
import Nav from "./nav";
import LayoutOverlay from "./layoutOverlay";

const Layout = ({ children, categories, seo }) => {
  return (
    <div className="relative">
      {/* <LayoutOverlay /> */}
      <Nav />
      {children}
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Layout;
