export const selectAnImage = (arrayOfImages, imageTitle) => {
  const imageFiltered = arrayOfImages.filter((e) => {
    e.attributes.slug == imageTitle;
    return e;
  });
  return imageFiltered[0].attributes.image;
};
