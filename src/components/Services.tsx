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
import { ReactElement } from 'react';
import { FcIdea, FcInspection, FcSettings, FcSignature } from 'react-icons/fc';
import { ButtonCta } from './ButtonCta';

export function Services() {
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
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 6, lg: 12 }}>
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
                    <Heading size="lg">Ideação</Heading>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text as={'span'} size={'md'}>
                          Viabilidade Jurídica da Ideia
                        </Text>
                      </Box>
                      <Box>
                        <Text pt="1" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> A ideia é
                          lícita?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Existe
                          alguma lei que a define?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Existe
                          alguma lei que a proíbe?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Esse tipo de
                          negócio é regulamentado?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Existe a
                          obrigação de ter alguma certificação ou registro em algum
                          órgão?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Consigo
                          desenvolver a regulamentação junto ao legislativo?
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="capitalize">
                          serviços
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Pesquisa de
                          viabilidade jurídica
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Viabilidade
                          de construção legislativa
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Stack>
              </Card>
            </Flex>
            {/* FORMAÇÃO */}
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
                    <Heading size="lg">Formação</Heading>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text as={'span'} size={'md'}>
                          Ainda não é a hora de registrar a empresa
                        </Text>
                      </Box>
                      <Box>
                        <Text pt="1" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Vai
                          empreender sozinho?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Vai ter
                          sócios?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Qual o time
                          ideal para colocar a ideia em prática?
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="capitalize">
                          serviços
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Elaboração
                          de um MoU (memorando de entendimentos entre sócios)
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Stack>
              </Card>
            </Flex>
            {/* CRIAÇÃO/TRAÇÃO */}
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
                    <Heading size="lg">Tração</Heading>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text as={'span'} size={'md'}>
                          O negócio já possui viabilidade jurídica, o empreendedor
                          coloca a mão na massa para resolver uma dor do mercado
                        </Text>
                      </Box>
                      <Box>
                        <Text pt="1" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Como
                          contratar desenvolvedores, programadores, designers e outros
                          prestadores de serviços?
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="capitalize">
                          serviços
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
                          cessão dos direitos autorais de software
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Como falar
                          do projeto para essas e outras pessoas (como investidores) sem
                          que a "ideia" seja divulgada?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Termos ou
                          cláusulas de confidencialidade
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Stack>
              </Card>
            </Flex>
            {/* VALIDAÇÃO */}
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
                    <Heading size="lg">Validação</Heading>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Text as={'span'} size={'md'}>
                          Testes moderados do MVP (Produto Mínimo Viável) no mercado
                        </Text>
                      </Box>
                      <Box>
                        <Text pt="1" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Como
                          contratar desenvolvedores, programadores, designers e outros
                          prestadores de serviços?
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="capitalize">
                          serviços
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
                          cessão dos direitos autorais de software
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Como falar
                          do projeto para essas e outras pessoas (como investidores) sem
                          que a "ideia" seja divulgada?
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={CheckIcon} color={'brandorange.500'} /> Termos ou
                          cláusulas de confidencialidade
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Stack>
              </Card>
            </Flex>

            {/* <Box overflow="hidden" shadow={'xl'}>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandorange.600', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcIdea} w={16} h={16} />}
                            text={'Ideação: Viabilidade Jurídica da Ideia'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    A ideia é lícita? <br />
                    Existe alguma lei que a define? <br />
                    Existe alguma lei que a proíbe? <br />
                    Esse tipo de negócio é regulamentado? <br />
                    Existe a obrigação de ter alguma certificação ou registro em algum
                    órgão? <br />
                    Consigo desenvolver a regulamentação junto ao legislativo? <br />
                    <b>
                      SERVIÇOS: Pesquisa de viabilidade jurídica + viabilidade de
                      construção legislativa
                    </b>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandorange.600', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcSignature} w={16} h={16} />}
                            text={'Formação: Ainda não é a hora de registrar a empresa'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Vai empreender sozinho? <br />
                    Vai ter sócios? <br />
                    Qual o time ideal para colocar a ideia em prática? <br />
                    <b>
                      SERVIÇO: Elaboração de um MoU (memorando de entendimentos entre
                      sócios)
                    </b>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandorange.600', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcSettings} w={16} h={16} />}
                            text={
                              'Criação/Tração: O negócio já possui viabilidade jurídica, o empreendedor coloca a mão na massa para resolver uma dor do mercado '
                            }
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Como contratar desenvolvedores, programadores, designers e outros
                    prestadores de serviços? <br />
                    <b>
                      SERVIÇOS: Contratos com terceiros + Contratos de vesting +
                      Formalizar cessão dos direitos autorais de software Como falar do
                      projeto para essas e outras pessoas (como investidores) sem que a
                      "ideia" seja divulgada?{' '}
                    </b>
                    <br />
                    <b> SERVIÇO: Termos/cláusulas de confidencialidade </b>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandorange.600', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcInspection} w={16} h={16} />}
                            text={
                              'Validação: Testes moderados do MVP (Produto Mínimo Viável) no mercado'
                            }
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <b>
                      SERVIÇOS: Formalizar a empresa (tipo societário e regime de
                      tributação) + Busca prévia INPI + Registrar marca/patente.
                    </b>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandorange.600', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcPositiveDynamic} w={16} h={16} />}
                            text={
                              'Operação/Escala: Oferecimento ao público em grande escala'
                            }
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Relacionamento com clientes. <br />
                    <b>SERVIÇOS: Termo de Uso + Política de Privacidade</b> <br />
                    Formalização dos negócios. <br />
                    <b>SERVIÇOS: Compliance + Governança (trabalhista, dados, etc).</b>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'brandorange.600', color: 'brandbeige.200' }}
                    >
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcConferenceCall} w={16} h={16} />}
                            text={'Investidores: O mercado quer fazer parte do negócio'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Relação com investidores. <br />
                    <b>
                      SERVIÇOS: Inclusão de sócio no capital social; <br />
                      Estruturação da Sociedade em conta de participação; <br />
                      Contrato de Mútuo conversível; <br />
                      Estruturação de Equity Crowdfunding; <br />
                      Contrato de Opção de compra; <br />
                      Contrato de participação; <br />
                      Term Sheet ou Carta de Intenções; <br />
                      Processo de auditoria (Due Diligence) <br />
                    </b>
                    Obs: Podem haver investimentos em outras fases
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box> */}
          </SimpleGrid>
          <ButtonCta />
        </Stack>
      </Container>
    </Box>
  );
}
