export const selectAnImage = (arrayOfImages, imageTitle) => {
  const imageFiltered = arrayOfImages.filter((e) => {
    e.attributes.slug == imageTitle;
    return e;
  });
  return imageFiltered[0].attributes.image;
};

export const FORM_CLASSES = {
  label: "text-black font-semibold md:text-md text-sm",
  input_textarea_primary: `primary w-full text-secondary border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-secondary focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
  input_textarea_secondary: `secondary w-full text-HL_gray-500 border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-secondary focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
  button_secondary: `w-full font-semibold hover:font-bold text-lg text-white bg-secondary  hover:bg-secondary_button focus:bg-secondary_button transition duration-300 ease hover:ease-out p-2  focus:border-white focus:border-2 outline-none rounded-md shadow-md shadow-gray-800 `,
  button_primary: `w-full font-semibold hover:font-bold text-lg text-white  bg-primary-dark hover:bg-primary-light focus:bg-primary-light transition duration-300 ease hover:ease-out p-2  focus:border-white focus:border-2 outline-none rounded-md shadow-md shadow-gray-800 `,
};
