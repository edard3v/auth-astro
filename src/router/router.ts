export const ROUTER = {
  home: {
    href: "/",
    display: "Inicio",
    is_protected: false,
  },

  contact: {
    href: "/contacto/",
    display: "Contacto",
    is_protected: false,
  },
  login: {
    href: "/iniciar_sesion/",
    display: "Login",
    is_protected: false,
  },
  register: {
    href: "/registro/",
    display: "Registro",
    is_protected: false,
  },
  account: {
    href: "/cuenta/",
    display: "Cuenta",
    is_protected: true,
  },
};
