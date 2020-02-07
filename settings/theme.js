const fontsFromGoogle = {
  main: {
    name: "Libre Franklin",
    styles: [400, 700]
  },
  mono: {
    name: "Inconsolata"
  }
};

export default {
  fontsFromGoogle,

  fonts: {
    main: fontsFromGoogle.main.name,
    mono: fontsFromGoogle.mono.name
  },

  colors: {
    bg: "seashell"
  }
};
