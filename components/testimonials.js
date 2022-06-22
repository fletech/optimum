import React from "react";

import SectionDefault from "./sectionDefault";
import SectionHeading from "./sectionHeading";
import TestimonialCard from "./testimonialCard";

const TESTIMONIALS = [
  {
    id: 1,
    attributes: {
      name: "Marcos Galperín",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sunt expedita dolorum natus explicabo quasi doloribus animi veritatis esse minus placeat ipsam. Quod repudiandae natus perspiciatis explicabo architecto error iure!",
      company: "SEO @ Mercado Libre",
      image: ["image"],
      imageAvatar: "fake-profile-galperin.png",
    },
  },
  {
    id: 2,
    attributes: {
      name: "Elon Musk",
      testimonial:
        "Libero, sunt expedita dolorum natus explicabo quasi doloribus animi veritatis esse minus placeat ipsam. Quod repudiandae natus, error iure!",
      company: "SEO @ Tesla",
      image: ["image"],
      imageAvatar: "fake-profile.png",
    },
  },
  {
    id: 3,
    attributes: {
      name: "Mark Zuckerberg",
      testimonial:
        "Odit sit deleniti voluptas adipisci inventore totam. Amet incidunt sapiente hic aliquam debitis nobis architecto quibusdam fugiat sit harum, laboriosam perspiciatis vel dolorum magni magnam accusamus maxime sed facere quo natus aut, accusantium quod et aspernatur!",
      company: "SEO @ Meta",
      image: ["image"],
      imageAvatar: "fake.png",
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
        topHeadline={"Lo que "}
        mainHeadline={"dicen de nosotros"}
        textColor={"text-HL_blue-dark"}
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
