import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

import {
  FcIdea,
  FcInspection,
  FcSettings,
  FcCheckmark,
  FcConferenceCall,
} from 'react-icons/fc';
import { ButtonCta } from './ButtonCta';
interface FeatureProps {
  text: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'} justifyContent={'center'}>
      <Flex w={16} h={16} align={'center'} justify={'center'} rounded={'full'}>
        {icon}
      </Flex>
      <Text fontWeight={600} align={'center'}>
        {text}
      </Text>
    </Stack>
  );
};

export function Services() {
  const bg = useColorModeValue('brandblue.500', 'brandblue.600');
  const color = useColorModeValue('brandbeige.100', 'brandbeige.200');

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
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: 1, lg: 6 }}>
            <Box
              overflow="hidden"
              backdropFilter="auto"
              backdropBlur="1rem"
              shadow={'xl'}
            >
              <Accordion allowToggle={true} reduceMotion={true}>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandblue.400', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcIdea} w={16} h={16} />}
                            text={'Idea????o: Viabilidade Jur??dica da Ideia'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="1" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> A ideia ??
                        l??cita?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Existe
                        alguma lei que a define?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Existe
                        alguma lei que a pro??be?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Esse tipo de
                        neg??cio ?? regulamentado?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Existe a
                        obriga????o de ter alguma certifica????o ou registro em algum ??rg??o?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Consigo
                        desenvolver a regulamenta????o junto ao legislativo?
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="capitalize">
                        servi??os:
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Pesquisa de
                        viabilidade jur??dica
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Viabilidade
                        de constru????o legislativa
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandblue.400', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcConferenceCall} w={16} h={16} />}
                            text={'Forma????o: Ainda n??o ?? a hora de registrar a empresa'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="1" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Vai
                        empreender sozinho?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Vai ter
                        s??cios?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Qual o time
                        ideal para colocar a ideia em pr??tica?
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="capitalize">
                        servi??os:
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Elabora????o
                        de um MoU (memorando de entendimentos entre s??cios)
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandblue.400', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcSettings} w={16} h={16} />}
                            text={
                              'Cria????o/Tra????o: O neg??cio j?? possui viabilidade jur??dica, o empreendedor coloca a m??o na massa para resolver uma dor do mercado '
                            }
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="1" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Como
                        contratar desenvolvedores, programadores, designers e outros
                        prestadores de servi??os?
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="capitalize">
                        servi??os:
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Contratos
                        com terceiros
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Contratos de
                        vesting
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Formalizar
                        cess??o dos direitos autorais de software
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Como falar
                        do projeto para essas e outras pessoas (como investidores) sem
                        que a "ideia" seja divulgada?
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Termos ou
                        cl??usulas de confidencialidade
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandblue.400', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcInspection} w={16} h={16} />}
                            text={
                              'Valida????o: Testes moderados do MVP (Produto M??nimo Vi??vel) no mercado'
                            }
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Heading size="xs" textTransform="capitalize">
                        servi??os:
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Formalizar a
                        empresa (tipo societ??rio e regime de tributa????o)
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Busca pr??via
                        INPI
                      </Text>
                      <Text pt="2" fontSize="sm">
                        <Icon as={FcCheckmark} color={'brandorange.500'} /> Registrar
                        marca/patente
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </SimpleGrid>
          <ButtonCta />
        </Stack>
      </Container>
    </Box>
  );
}
