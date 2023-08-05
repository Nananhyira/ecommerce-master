import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#AEEA62",
      200: "#93E52E",
      300: "#7BCB17",
      400: "#66AA12",
      500: "#558D0D",
      600: "#46760A",
      700: "#375C09",
      800: "",
      900: "",
    },
  },
  fonts: {
    body: "'Lato', sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.50",
      },
    }),
  },
  components: {
    Button,
  },
});
