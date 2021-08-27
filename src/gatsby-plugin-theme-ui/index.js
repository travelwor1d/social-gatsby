export default {
  colors: {
    black: "black",
    white: "white",
    text: "#2B2B2B",
    background: "white",
    offWhite: "#F4F4F4",
  },
  fonts: {
    display: "'Nostra', system-ui, sans-serif",
    sans: "'Aktiv Grotesk', system-ui, sans-serif",
    body: "'Suisse Regular', system-ui, sans-serif",
    mono: "'Suisse Mono', system-ui, sans-serif",
  },
  fontWeights: {
    regular: "normal",
    light: 300,
  },
  lineHeights: {
    leadingNone: 1,
    leadingTight: 1.25,
    leadingSnug: 1.375,
    leadingNormal: 1.5,
    leadingRelaxed: 1.625,
    leadingLoose: 2,
  },
  text: {
    display: {
      color: "inherit",
      fontFamily: "display",
      lineHeight: "leadingTight",
      fontWeight: "regular",
      mt: 0,
      mb: 0,
      wordBreak: "break-all",
    },
    menu: {
      color: "inherit",
      fontFamily: "sans",
      lineHeight: "leadingNormal",
      fontWeight: "regular",
      mt: 0,
      mb: 0,
    },
    body: {
      color: "inherit",
      fontFamily: "body",
      lineHeight: "leadingNormal",
      fontWeight: "light",
      mt: 0,
      mb: 0,
    },
    mono: {
      color: "inherit",
      fontFamily: "mono",
      lineHeight: "leadingNormal",
      fontWeight: "regular",
      mt: 0,
      mb: 0,
    },
  },
  styles: {
    display: {
      variant: "text.display",
      fontSize: [8, 9, 10],
      mt: 0,
      mb: 3,
    },
    about: {
      variant: "text.body",
      p: {
        fontSize: [8, 9, 10],
        mt: 0,
        mb: 2,
      },
      strong: {
        fontFamily: "display",
        fontWeight: "regular",
      },
    },
    date: {
      variant: "text.body",
      fontWeight: "regular",
      fontSize: [2, 2, 3],
    },
    html: {
      variant: "text.body",
      fontSize: [1, 1, 2],
      mt: 0,
      mb: 2,
      p: {
        fontSize: [1, 1, 2],
        mt: 0,
        mb: 3,
      },
      strong: {
        fontWeight: "regular",
      },
      "h1, h2, h3, h4, h5, h6": {
        variant: "text.body",
        fontWeight: "regular",
      },
    },
    mono: {
      variant: "text.mono",
      fontSize: 1,
      textTransform: "uppercase",
    },
    label: {
      variant: "text.mono",
      p: 0,
      px: 3,
      pt: 3,
      borderColor: "black",
      border: "1px solid",
      borderBottom: "none",
      backgroundColor: "white",
      fontSize: [0, 0, 1],
      textTransform: "uppercase",
    },
    input: {
      variant: "text.body",
      px: 3,
      pb: 3,
      mb: 2,
      borderColor: "black",
      border: "1px solid",
      borderTop: "none",
      backgroundColor: "white",
      fontSize: [3, 3, 5],
    },
    button: {
      variant: "text.body",
      px: 5,
      height: ["30px", "30px", "40px"],
      borderRadius: ["15px", "15px", "20px"],
      borderColor: "black",
      border: "1px solid",
      backgroundColor: "white",
      fontSize: [3, 3, 4],
      textTransform: "uppercase",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    carouselButton: {
      variant: "text.body",
      height: ["50px", "50px", "100px"],
      borderColor: "black",
      border: "1px solid",
      backgroundColor: "transparent",
      fontSize: [3, 3, 4],
      textTransform: "uppercase",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "200ms all ease",
      "&:hover": {
        backgroundColor: "white",
      },
    },
    navigation: {
      variant: "text.menu",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      backgroundColor: "white",
      borderBottomColor: "black",
      borderBottom: "1px solid",
      py: 3,
      px: [4, 4, 6],
      sup: {
        display: "block",
        top: 0,
        pt: 1,
        fontSize: [0, 0, 2],
        lineHeight: "inherit",
        verticalAlign: "initial",
      },
      span: {
        display: "block",
        fontSize: [4, 4, 6],
        width: "120px",
        textTransform: "uppercase",
      },
    },
  },
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 26, 32, 38, 48, 56, 64, 96],
  space: [0, 4, 8, 14, 16, 32, 48, 56, 64, 72, 84, 96, 128, 256, 512],
}
