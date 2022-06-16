import { createTheme } from '@mui/material/styles';
import { orange, brown, red, green } from "@mui/material/colors";


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#19857b",
    },
    text: {
      light: "#191919",
      dark: "#FFFFFF",
    },
  },
});

export default theme;