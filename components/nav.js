import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="md:h-[8vh] h-[10vh] fixed top-0 z-[300] bg-NAV_transparency w-full flex px-20">
      {/* // <div className="h-auto w-full fixed top-0 z-[300] bg-NAV_transparency flex"> */}
      <div className="w-1/2 h-full"></div>
      <nav className="w-1/2 h-full">
        <ul className="h-full flex justify-end items-center">
          <li className="ml-2 text-white">
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li className="ml-2 text-white">
            <Link href={`/blog`}>
              <a>Contactanos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
