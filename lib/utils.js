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
};

export const STRUCTURE = {
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
      let path = `${STRUCTURE.path_root(type)}/${slug}#contacto`;
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
