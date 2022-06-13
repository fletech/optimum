import React from "react";
import Nav from "./nav";

const Layout = ({ children, categories, seo }) => {
  return (
    <>
      <Nav categories={categories} />
      {children}
    </>
  );
};

export default Layout;
