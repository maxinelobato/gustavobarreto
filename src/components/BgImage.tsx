import { Box, BoxProps } from '@chakra-ui/react';
import imgBG from '../assets/img/startup1.webp';

export function BgImage(props: BoxProps) {
  return (
    <Box
      w="100%"
      h={{ base: '50vh', md: '60vh', lg: '70vh' }}
      bgImage={imgBG}
      bgSize={'cover'}
      bgPosition={'center center'}
      {...props}
    />
  );
}
