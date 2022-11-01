import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CTAScrollToTop } from "./components/CTAScrollToTop";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CTAScrollToTop />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
