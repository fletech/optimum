import React, { useContext } from "react";
import Link from "next/link";
import { GlobalContext } from "../pages/_app";

const NAV_ITEMS = [
  {
    id: 1,
    title: "Inicio",
    href: "/",
  },
  {
    id: 2,
    title: "Gestoría",
    href: "/services/gestoria-del-automotor",
  },
  {
    id: 3,
    title: "Seguros",
    href: "/services/seguros-generales",
  },
  {
    id: 4,
    title: "Alianzas",
    href: "/#alianzas-estrategicas",
  },
  {
    id: 5,
    title: "Contactanos",
    href: "/#contact",
  },
];

const Nav = () => {
  const { modal } = useContext(GlobalContext);
  return (
    <div
      className={`${
        modal ? "hidden" : ""
      } md:h-[8vh] h-[10vh] fixed top-0 z-[800] bg-NAV_transparency hover:bg-white w-[100%] px-[10%] flex shadow-md shadow-gray-400`}
    >
      {/* // <div className="h-auto w-full fixed top-0 z-[300] bg-NAV_transparency flex"> */}
      <div className="w-1/2 h-full flex justify-start items-center">
        <img alt="logo" src="/images/LOGO-brown.svg" className="h-[60%]" />
      </div>
      <nav className="w-1/2 h-full flex justify-end items-center">
        <ul className="hidden h-full lg:flex justify-end items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="ml-5 text-primary-dark font-semibold">
              <Link href={item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden h-full flex justify-end items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h- w-8 text-primary-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
