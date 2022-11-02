import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const pageTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#b07f72",
      },
      secondary: {
        main: "#432",
      },
    },
    typography: {
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 700,
      fontFamily: `"Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", sans-serif`,

      h1: { fontSize: 60 },
      h2: { fontSize: 48 },
      h3: { fontSize: 42 },
      h4: { fontSize: 36 },
      h5: { fontSize: 20 },
      h6: { fontSize: 18 },
      subtitle1: { fontSize: 18 },
      body1: { fontSize: 16 },
      button: { textTransform: "none" },
    },
  })
);

export default pageTheme;
