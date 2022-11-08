import { extendTheme } from '@chakra-ui/react';
import '@fontsource/quicksand';
import '@fontsource/lato';

const theme = extendTheme({
  ThemeConfig: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Quicksand',
    body: 'Lato',
  },
  colors: {
    brandblue: {
      600: '#142E3E',
      500: '#21508A',
      400: '#166B9B',
    },
    brandbeige: {
      100: '#EFEEEE',
      200: '#ECE1D1',
    },
    brandorange: {
      500: '#E08031',
      600: '#D75224',
    },
  },
});

export default theme;
