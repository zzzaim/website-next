const fontsFromGoogle = {
  sans: {
    name: "Arimo",
    styles: [400, 700]
  },
  serif: {
    name: "Lora",
    styles: [400, 700]
  },
  monospace: {
    name: "Inconsolata"
  }
};

export default {
  fontsFromGoogle,

  fonts: {
    sans: fontsFromGoogle.sans.name,
    serif: fontsFromGoogle.serif.name,
    heading: fontsFromGoogle.sans.name,
    monospace: fontsFromGoogle.monospace.name
  },

  colors: {
    bg: "seashell",
    text: "black",
    link: "black"
  },

  borders: {
    block: "4px solid black"
  },

  typography: {
    baseFontSize: "18px"
  }
};
