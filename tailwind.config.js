const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      "gray": "#6b7280",
      "blue-dark": {
        DEFAULT: "#212F39",
        50: "#698EA8",
        100: "#5D84A0",
        200: "#4E6F87",
        300: "#3F5A6D",
        400: "#304453",
        500: "#212F39",
        600: "#0C1215",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
      normal: {
        DEFAULT: "#6B7280",
        50: "#CDD0D5",
        100: "#C2C5CC",
        200: "#ACB0BA",
        300: "#969BA7",
        400: "#7F8694",
        500: "#6B7280",
        600: "#515761",
        700: "#383C43",
        800: "#1E2024",
        900: "#050506",
      },
      fighting: {
        DEFAULT: "#D56723",
        50: "#F4D1BC",
        100: "#F1C5AA",
        200: "#EBAD87",
        300: "#E69664",
        400: "#E07E41",
        500: "#D56723",
        600: "#A5501B",
        700: "#753813",
        800: "#44210B",
        900: "#140A03",
      },
      flying: {
        DEFAULT: "#A6BDFD",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#F6F8FF",
        400: "#CEDBFE",
        500: "#A6BDFD",
        600: "#6F94FC",
        700: "#386CFB",
        800: "#0645F5",
        900: "#0435BE",
      },
      poison: {
        DEFAULT: "#478800",
        50: "#A4FF41",
        100: "#9AFF2C",
        200: "#87FF03",
        300: "#72DA00",
        400: "#5CB100",
        500: "#478800",
        600: "#2A5000",
        700: "#0C1800",
        800: "#000000",
        900: "#000000",
      },
      ground: {
        DEFAULT: "#BE9676",
        50: "#F9F5F3",
        100: "#F3EBE5",
        200: "#E5D6C9",
        300: "#D8C0AD",
        400: "#CBAB92",
        500: "#BE9676",
        600: "#AB7951",
        700: "#855E3F",
        800: "#5F432D",
        900: "#39281B",
      },
      rock: {
        DEFAULT: "#8A7F8D",
        50: "#E3E0E3",
        100: "#D9D5DA",
        200: "#C5C0C7",
        300: "#B1AAB3",
        400: "#9E95A0",
        500: "#8A7F8D",
        600: "#6D6470",
        700: "#504952",
        800: "#332F35",
        900: "#171517",
      },
      bug: {
        DEFAULT: "#723B8C",
        50: "#C9A5D9",
        100: "#C097D3",
        200: "#AE7AC7",
        300: "#9D5EBB",
        400: "#8947A9",
        500: "#723B8C",
        600: "#522A65",
        700: "#321A3D",
        800: "#120916",
        900: "#000000",
      },
      ghost: {
        DEFAULT: "#F8F8FF",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFFFF",
        500: "#F8F8FF",
        600: "#C0C0FF",
        700: "#8888FF",
        800: "#5050FF",
        900: "#1818FF",
      },
      steel: {
        DEFAULT: "#BFC4C6",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#EAECEC",
        400: "#D5D8D9",
        500: "#BFC4C6",
        600: "#A1A9AC",
        700: "#848D91",
        800: "#687175",
        900: "#4E5457",
      },
      water: {
        DEFAULT: "#09C3DB",
        50: "#A0F1FB",
        100: "#8DEEFA",
        200: "#66E8F9",
        300: "#3FE2F7",
        400: "#17DCF5",
        500: "#09C3DB",
        600: "#0793A5",
        700: "#05636F",
        800: "#023339",
        900: "#000303",
      },
      psychic: {
        DEFAULT: "#CA628F",
        50: "#F8EBF1",
        100: "#F3DCE6",
        200: "#E9BED0",
        300: "#DF9FBB",
        400: "#D481A5",
        500: "#CA628F",
        600: "#B63E72",
        700: "#8C2F58",
        800: "#62213D",
        900: "#391323",
      },
      electric: {
        DEFAULT: "#EFB810",
        50: "#FBEBBC",
        100: "#F9E5A9",
        200: "#F7DA83",
        300: "#F4CF5C",
        400: "#F2C336",
        500: "#EFB810",
        600: "#BA900C",
        700: "#866709",
        800: "#513F05",
        900: "#1D1602",
      },
      grass: {
        DEFAULT: "#6C8D18",
        50: "#C7E875",
        100: "#C0E564",
        200: "#B2DF41",
        300: "#A1D324",
        400: "#87B01E",
        500: "#6C8D18",
        600: "#475D10",
        700: "#232D08",
        800: "#000000",
        900: "#000000",
      },
      ice: {
        DEFAULT: "#D2EBF0",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#F1F9FA",
        500: "#D2EBF0",
        600: "#A8D8E2",
        700: "#7EC6D4",
        800: "#54B3C6",
        900: "#3896A9",
      },
      dragon: {
        DEFAULT: "#A42821",
        50: "#E99893",
        100: "#E68882",
        200: "#DF6760",
        300: "#D8473E",
        400: "#C63028",
        500: "#A42821",
        600: "#751D18",
        700: "#47110E",
        800: "#180605",
        900: "#000000",
      },
      dark: {
        DEFAULT: "#547E79",
        50: "#B9D0CE",
        100: "#ADC8C5",
        200: "#94B8B4",
        300: "#7CA8A2",
        400: "#649691",
        500: "#547E79",
        600: "#3E5C59",
        700: "#273B38",
        800: "#111918",
        900: "#000000",
      },
      fairy: {
        DEFAULT: "#F2C1D1",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#F9E3EA",
        500: "#F2C1D1",
        600: "#E893AF",
        700: "#DF648C",
        800: "#D5366A",
        900: "#AE2551",
      },
      unknown: {
        DEFAULT: "#C9B25F",
        50: "#F7F4E8",
        100: "#F2EDD9",
        200: "#E8DEBB",
        300: "#DECF9C",
        400: "#D3C17E",
        500: "#C9B25F",
        600: "#B39A3D",
        700: "#89762E",
        800: "#5F5220",
        900: "#362E12",
      },
      shadow: {
        DEFAULT: '#7B7A72',
        '50': '#D4D4D1',
        '100': '#CACAC6',
        '200': '#B7B6B1',
        '300': '#A3A29C',
        '400': '#8F8E86',
        '500': '#7B7A72',
        '600': '#5E5D57',
        '700': '#41403C',
        '800': '#242321',
        '900': '#070606'
      },
      green: {
        50: "#F6FEF8",
        100: "#E9FCED",
        200: "#D7F9DE",
        300: "#C1F6CC",
        400: "#AFF3BE",
        500: "#98F0AB",
        600: "#56E675",
        700: "#1ECD44",
        800: "#148A2E",
        900: "#0A4316",
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      desktop: "1024px",
      // => @media (min-width: 1024px) { ... }

      large: "1600px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        audio: ["'Audiowide', cursive", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
