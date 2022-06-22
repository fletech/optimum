import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col w-[100%] h-full p-6 rounded-md ring-1 ring-gray-100  hover:ring-2  hover:shadow-lg hover:shadow-slate-200 hover:scale-105 transition-{scale} ease duration-200">
      <div className="flex justify-center items-center w-[6rem] h-[6rem] overflow-hidden rounded-full border border-1 ">
        <img
          className="object-cover w-full h-full "
          alt={testimonial.attributes.name + " picture"}
          src={`/images/${testimonial.attributes.imageAvatar}`}
        />
      </div>
      <div className="flex flex-col mt-4">
        <p className="font-bold text-lg text-HL_blue-dark">
          {testimonial.attributes.name}
        </p>
        <p className="text-HL_blue-dark my-2 font-light">
          {/* <p className="text-gray-300 my-2 font-light"> */}
          {testimonial.attributes.company}
        </p>
        <p className="text-gray-500 font-light">
          {`"${testimonial.attributes.testimonial}"`}
        </p>
      </div>
    </div>
  );
};
export default TestimonialCard;
