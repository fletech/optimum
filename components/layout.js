import React from "react";
import Nav from "./nav";

const Layout = ({ children, categories, seo }) => {
  return (
    <div className="relative">
      <Nav categories={categories} />
      {children}
    </div>
  );
};

export default Layout;
