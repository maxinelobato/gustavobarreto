import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BgImage } from './BgImage';
import { ButtonCta } from './ButtonCta';

export function Header() {
  const bg = useColorModeValue('brandblue.500', 'brandblue.600');
  const color = useColorModeValue('brandbeige.100', 'brandbeige.200');
  const textColor = useColorModeValue('brandorange.500', 'brandorange.600');

  return (
    <Box bg={bg} color={color}>
      <BgImage>
        <Container maxW={'7xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              Procurando um Advogado Empresarial Especialista <br />
              <Text as={'span'} textColor={textColor}>
                em <i>Startup?</i>
              </Text>
            </Heading>
            <Text
              color={'whiteAlpha.800'}
              fontWeight={500}
              fontSize={{ base: 'md', sm: 'lg', md: '2xl' }}
            >
              Receba toda a ajuda jurídica necessária para a sua <i>Startup</i>
            </Text>
            <ButtonCta />
          </Stack>
        </Container>
      </BgImage>
    </Box>
  );
}
