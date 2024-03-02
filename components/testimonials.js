import React from "react";

import SectionDefault from "./sectionDefault";
import SectionHeading from "./sectionHeading";
import TestimonialCard from "./testimonialCard";

const TESTIMONIALS = [
  {
    id: 1,
    attributes: {
      name: "Agustin Lambiase Rojas",
      testimonial:
        "En Gestion Simple nos entendieron desde el momento uno los requerimientos y tuvimos la flota en funcionamiento en menos de 48 horas. La atención y el servicio es excelente. Recomendamos a Gestion Simple sin lugar a dudas. ",
      company: "Gerente @ El Escuadrón Servicios",
      image: ["image"],
      imageAvatar: "lambiase.jpg",
    },
  },
  {
    id: 2,
    attributes: {
      name: "Graciela Capella",
      testimonial:
        "Depositamos en Silvina y Gestión Simple la confianza para ser el último contacto con nuestros clientes. Trato y profesionalidad destacables.",
      company: "Contable @ Beta Camiones",
      image: ["image"],
      imageAvatar: "capella.jpeg",
    },
  },

  {
    id: 3,
    attributes: {
      name: "Agustín Caceres ",
      testimonial:
        "Gestión Simple nos dio la tranquilidad de saber que lo que nosotros creíamos un problema, en realidad era factible de hacerse gracias a la gran profesionalidad de Silvina. Excelente servicio y atención. ",
      company: "Director @ Ciudadanías y Gestiones",
      image: ["image"],
      imageAvatar: "caceres.jpeg",
    },
  },
];

const Testimonials = ({ testimonials = TESTIMONIALS }) => {
  return (
    <SectionDefault
      classes={"mt-[6vh] md:mt-[5vh] h-full w-full"}
      padding={"py-[5vh] md:px-[4rem] lg:px-[8rem] xl:px-[2rem] px-[1rem]"}
      display={"flex flex-col items-center"}
    >
      <SectionHeading
        topHeadline={"Algunas"}
        mainHeadline={"Opiniones"}
        textColor={"text-primary-dark"}
      />
      <div
        className={
          "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        }
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </SectionDefault>
  );
};
export default Testimonials;
