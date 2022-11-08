import { Box, BoxProps } from '@chakra-ui/react';
import imgBG from '../assets/img/startup1.webp';

export function BgBoxImage(props: BoxProps) {
  return (
    <Box
      w="100%"
      h={{ base: '50vh', md: '70vh', lg: '80vh' }}
      bgImage={imgBG}
      bgSize={'cover'}
      bgPosition={'center center'}
      {...props}
    />
  );
}
