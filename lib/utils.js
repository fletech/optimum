export const selectAnImage = (arrayOfImages, imageTitle) => {
  const imageFiltered = arrayOfImages.filter((e) => {
    e.attributes.slug == imageTitle;
    return e;
  });
  return imageFiltered[0].attributes.image;
};

export const FORM_CLASSES = {
  label: "text-gray-500 font-light md:text-md text-sm",
  input_textarea_primary: `primary w-full text-black border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-black focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
  input_textarea_secondary: `secondary w-full text-HL_gray-500 border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-secondary focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
  button_secondary: `w-full font-semibold hover:font-bold text-lg text-white bg-secondary  hover:bg-secondary_button focus:bg-secondary_button transition duration-300 ease hover:ease-out p-2  focus:border-white focus:border-2 outline-none rounded-md shadow-md shadow-gray-800 `,
  button_primary: `w-full font-semibold hover:font-bold text-lg text-white  bg-primary-dark hover:bg-primary-light focus:bg-primary-light transition duration-300 ease hover:ease-out p-2  focus:border-white focus:border-2 outline-none rounded-md shadow-md shadow-gray-800 `,
};

export const CONTENT = {
  path_root(type) {
    const TYPE_OF_SERVICE = {
      service: "/servicios",
      alliance: "/otros-servicios",
    };
    return TYPE_OF_SERVICE[type];
  },
  header: {
    actions: {
      back: ["< Volver", "/"],
      goTo_alliance: [
        "Ver ALIANZAS ESTRATÉGICAS >",
        "/otros-servicios/legales",
      ],
      goTo_service: [
        "Ver NUESTROS SERVICIOS >",
        "/servicios/gestoria-del-automotor",
      ],
    },
    nav(services) {
      let navItems = {};
      services.map((service) => {
        navItems = {
          ...navItems,
          [service.attributes.slug]: service.attributes.title,
        };
      });
      return navItems;
    },
  },
  button: {
    content: "Consultar ahora",
    action(slug, type) {
      let path = `${CONTENT.path_root(type)}/${slug}#contacto`;
      return path;
    },
  },

  list: {
    items(string) {
      return string.split("/" || "/ " || " / " || " /");
    },
  },
};

export const SERVICES = {
  service: [
    "gestoria-del-automotor",
    "tramites-generales",
    "seguros-generales",
  ],
  alliance: ["legales", "contables", "servicios-inmobiliarios"],
};
