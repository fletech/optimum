export const selectAnImage = (arrayOfImages, imageTitle) => {
  const imageFiltered = arrayOfImages.filter((e) => {
    e.attributes.slug == imageTitle;
    return e;
  });
  return imageFiltered[0].attributes.image;
};

export const FORM_CLASSES = {
  label: "text-black font-light md:text-md text-sm",
  input_textarea_primary: `primary w-full text-HL_brown border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-HL_brown focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
  input_textarea_secondary: `secondary w-full text-HL_gray-500 border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-HL_brown focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
};
