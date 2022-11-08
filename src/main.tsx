import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CTAScrollToTop } from "./components/CTAScrollToTop";

import theme from './components/theme/index';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CTAScrollToTop />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
