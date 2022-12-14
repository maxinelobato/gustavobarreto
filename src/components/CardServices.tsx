import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FcIdea, FcInspection, FcSettings, FcSignature } from 'react-icons/fc';
import { ButtonCta } from './ButtonCta';

export function CardServices() {
  const bg = useColorModeValue('brandblue.500', 'brandblue.600');
  const color = useColorModeValue('brandbeige.100', 'brandbeige.200');
  const borderColor = useColorModeValue('whiteAlpha.100', 'whiteAlpha.200');

  return (
    <Box bg={bg} color={color}>
      <Container maxW={'7xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 14, lg: 16 }}
          mt={-10}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            lineHeight={'110%'}
          >
            Veja como podemos lhe ajudar
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 5, lg: 5 }}>
            <Flex
              py={{ base: 10, md: 14, lg: 16 }}
              mt={-10}
              flex={1}
              align={'center'}
              justifyContent={{ base: 'start', md: 'start' }}
              direction={{ base: 'column', md: 'column' }}
            >
              <Card
                color={color}
                backdropFilter="auto"
                backdropBlur="1rem"
                bgColor={'whiteAlpha.50'}
                shadow={'xl'}
                border={'1px solid'}
                borderColor={borderColor}
                align={{ base: 'center', md: 'center' }}
                direction={{ base: 'column', md: 'column' }}
                overflow="hidden"
              >
                <Icon
                  as={FcIdea}
                  w={{ base: 100, md: 200 }}
                  h={{ base: 100, md: 200 }}
                />
                <Stack>
                  <CardBody textAlign={{ base: 'center', md: 'center' }}>
                    <Heading size="lg">Idea????o</Heading>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text as={'span'} size={'md'}>
                          Viabilidade Jur??dica da Ideia
                        </Text>
                      </Box>
                      <Box>
                        <Text pt="1" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> A ideia ??
                          l??cita?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Existe
                          alguma lei que a define?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Existe
                          alguma lei que a pro??be?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Esse tipo de
                          neg??cio ?? regulamentado?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Existe a
                          obriga????o de ter alguma certifica????o ou registro em algum
                          ??rg??o?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Consigo
                          desenvolver a regulamenta????o junto ao legislativo?
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="capitalize">
                          servi??os
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Pesquisa de
                          viabilidade jur??dica
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Viabilidade
                          de constru????o legislativa
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Stack>
              </Card>
            </Flex>
            {/* FORMA????O */}
            <Flex
              py={{ base: 10, md: 14, lg: 16 }}
              mt={-10}
              flex={1}
              align={'center'}
              justifyContent={{ base: 'start', md: 'start' }}
              direction={{ base: 'column', md: 'column' }}
            >
              <Card
                color={color}
                backdropFilter="auto"
                backdropBlur="1rem"
                bgColor={'whiteAlpha.50'}
                shadow={'xl'}
                border={'1px solid'}
                borderColor={borderColor}
                align={{ base: 'center', md: 'center' }}
                direction={{ base: 'column', md: 'column' }}
                overflow="hidden"
              >
                <Icon
                  as={FcSignature}
                  w={{ base: 100, md: 200 }}
                  h={{ base: 100, md: 200 }}
                />
                <Stack>
                  <CardBody textAlign={{ base: 'center', md: 'center' }}>
                    <Heading size="lg">Forma????o</Heading>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text as={'span'} size={'md'}>
                          Ainda n??o ?? a hora de registrar a empresa
                        </Text>
                      </Box>
                      <Box>
                        <Text pt="1" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Vai
                          empreender sozinho?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Vai ter
                          s??cios?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Qual o time
                          ideal para colocar a ideia em pr??tica?
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="capitalize">
                          servi??os
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Elabora????o
                          de um MoU (memorando de entendimentos entre s??cios)
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Stack>
              </Card>
            </Flex>
            {/* CRIA????O/TRA????O */}
            <Flex
              py={{ base: 10, md: 14, lg: 16 }}
              mt={-10}
              flex={1}
              align={'center'}
              justifyContent={{ base: 'start', md: 'start' }}
              direction={{ base: 'column', md: 'column' }}
            >
              <Card
                color={color}
                backdropFilter="auto"
                backdropBlur="1rem"
                bgColor={'whiteAlpha.50'}
                shadow={'xl'}
                border={'1px solid'}
                borderColor={borderColor}
                align={{ base: 'center', md: 'center' }}
                direction={{ base: 'column', md: 'column' }}
                overflow="hidden"
              >
                <Icon
                  as={FcSettings}
                  w={{ base: 100, md: 200 }}
                  h={{ base: 100, md: 200 }}
                />
                <Stack>
                  <CardBody textAlign={{ base: 'center', md: 'center' }}>
                    <Heading size="lg">Tra????o</Heading>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text as={'span'} size={'md'}>
                          O neg??cio j?? possui viabilidade jur??dica, o empreendedor
                          coloca a m??o na massa para resolver uma dor do mercado
                        </Text>
                      </Box>
                      <Box>
                        <Text pt="1" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Como
                          contratar desenvolvedores, programadores, designers e outros
                          prestadores de servi??os?
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="capitalize">
                          servi??os
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Contratos
                          com terceiros
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Contratos de
                          vesting
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Formalizar
                          cess??o dos direitos autorais de software
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Como falar
                          do projeto para essas e outras pessoas (como investidores) sem
                          que a "ideia" seja divulgada?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Termos ou
                          cl??usulas de confidencialidade
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Stack>
              </Card>
            </Flex>
            {/* VALIDA????O */}
            <Flex
              py={{ base: 10, md: 14, lg: 16 }}
              mt={-10}
              flex={1}
              align={'center'}
              justifyContent={{ base: 'start', md: 'start' }}
              direction={{ base: 'column', md: 'column' }}
            >
              <Card
                color={color}
                backdropFilter="auto"
                backdropBlur="1rem"
                bgColor={'whiteAlpha.50'}
                shadow={'xl'}
                border={'1px solid'}
                borderColor={borderColor}
                align={{ base: 'center', md: 'center' }}
                direction={{ base: 'column', md: 'column' }}
                overflow="hidden"
              >
                <Icon
                  as={FcInspection}
                  w={{ base: 100, md: 200 }}
                  h={{ base: 100, md: 200 }}
                />
                <Stack>
                  <CardBody textAlign={{ base: 'center', md: 'center' }}>
                    <Heading size="lg">Valida????o</Heading>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text as={'span'} size={'md'}>
                          Testes moderados do MVP (Produto M??nimo Vi??vel) no mercado
                        </Text>
                      </Box>
                      <Box>
                        <Text pt="1" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Como
                          contratar desenvolvedores, programadores, designers e outros
                          prestadores de servi??os?
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="capitalize">
                          servi??os
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Contratos
                          com terceiros
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Contratos de
                          vesting
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Formalizar
                          cess??o dos direitos autorais de software
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Como falar
                          do projeto para essas e outras pessoas (como investidores) sem
                          que a "ideia" seja divulgada?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Termos ou
                          cl??usulas de confidencialidade
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Stack>
              </Card>
            </Flex>
          </SimpleGrid>
          <ButtonCta />
        </Stack>
      </Container>
    </Box>
  );
}
