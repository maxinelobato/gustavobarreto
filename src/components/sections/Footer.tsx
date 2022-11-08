import {
  Box,
  chakra,
  Container,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';
import imgLogo1 from '../../assets/img/logobrancagrande.svg';
import { GoogleMaps } from '../GoogleMaps';

const SocialButton = ({ children }: { children: ReactNode }) => {
  const bg = useColorModeValue('brandblue.500', 'brandblue.600');
  return (
    <chakra.button
      bg={bg}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('brandblue.400', 'brandblue.400'),
      }}
    >
      {children}
    </chakra.button>
  );
};

export function Footer() {
  const bg = useColorModeValue('brandorange.500', 'brandorange.600');
  const color = useColorModeValue('brandbeige.100', 'brandbeige.200');

  return (
    <Box bg={bg} color={color}>
      <Container
        as={Stack}
        maxW={'7xl'}
        py={8}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Image height="5rem" width="15rem" src={imgLogo1} />
      </Container>
      <Container
        as={Stack}
        maxW={'7xl'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'center' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={2} pb={8}>
          <SocialButton>
            <Link
              style={{ textDecoration: 'none' }}
              href={'https://www.linkedin.com/in/gustavolimabarreto/'}
              isExternal
            >
              <FaLinkedin />
            </Link>
          </SocialButton>
          <SocialButton>
            <Link
              style={{ textDecoration: 'none' }}
              href={'https://www.instagram.com/glb.advocacia/'}
              isExternal
            >
              <FaInstagram />
            </Link>
          </SocialButton>
        </Stack>
      </Container>
      <Container
        as={Stack}
        maxW={'7xl'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'center' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6} pb={8} justifyContent={'center'}>
          <Text fontSize={'lg'} textAlign={'center'}>
            Santos | São Paulo | Brasil
          </Text>
        </Stack>
      </Container>
      <Stack direction={'row'} spacing={6} pb={8} justifyContent={'center'}>
        <GoogleMaps />
      </Stack>
    </Box>
  );
}
