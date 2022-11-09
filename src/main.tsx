import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ScrollCtaWhatsapp } from './components/ScrollCtaWhatsapp';

import theme from './components/theme/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ScrollCtaWhatsapp />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
