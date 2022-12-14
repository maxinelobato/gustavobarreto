import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Container,
  Text,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IoLogoWhatsapp } from 'react-icons/io';
import imgLogo1 from '../assets/img/logobrancagrande.svg';
import imgLogo2 from '../assets/img/logobrancapequena.svg';

export function Navbar() {
  // const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('brandblue.500', 'brandblue.600');
  const color = useColorModeValue('brandbeige.100', 'brandbeige.200');

  return (
    <>
      <Box color={color}>
        <Box px={4} w={'full'} position={'absolute'} zIndex={2}>
          <Container maxW="7xl">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              <Flex
                flex={{ base: 1, md: 'auto' }}
                ml={{ base: -2 }}
                display={{ base: 'flex', md: 'none' }}
                transition={'1.2seg'}
              >
                <Image
                  height={{ base: 16, md: 16 }}
                  width={{ base: 16, md: 16 }}
                  src={imgLogo2}
                />
              </Flex>
              <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                <Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  color={useColorModeValue('gray.800', 'white')}
                >
                  <Image
                    display={{ base: 'none', md: 'inline-flex' }}
                    color="accent"
                    height="12"
                    width="18"
                    src={imgLogo1}
                  />
                </Text>
              </Flex>
              <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={2}>
                  <Button
                    variant={'outline'}
                    bgColor={bg}
                    _hover={{ bgColor: 'blue.800', color: 'whiteAlpha' }}
                    leftIcon={<IoLogoWhatsapp size={22} />}
                  >
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="https://web.whatsapp.com/send?phone=5513996680686&text=Ol%C3%A1%2C%20Dr.%20Gustavo!%20Vim%20do%20seu%20site.%20Podemos%20conversar%3F"
                      isExternal
                    >
                      (13) 99668-0686
                    </Link>
                  </Button>
                  {/* <Button
                    variant={'outline'}
                    bgColor={bg}
                    _hover={{ bgColor: 'blue.800', color: 'whiteAlpha' }}
                    onClick={toggleColorMode}
                  >
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button> */}
                </Stack>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  );
}
