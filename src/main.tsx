import { ChakraProvider } from '@chakra-ui/react';
import { CtaWhatsapp } from './components/CtaWhatsapp';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import theme from './components/theme/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CtaWhatsapp />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
