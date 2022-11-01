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
} from "@chakra-ui/react";
import { ReactElement } from "react";

import {
  FcIdea,
  FcInspection,
  FcSettings,
  FcPositiveDynamic,
  FcSignature,
  FcConferenceCall,
} from "react-icons/fc";
import { ButtonCta } from "../ButtonCta";

interface FeatureProps {
  text: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"} justifyContent={"center"}>
      <Flex w={16} h={16} align={"center"} justify={"center"} rounded={"full"}>
        {icon}
      </Flex>
      <Text fontWeight={600} align={"center"}>
        {text}
      </Text>
    </Stack>
  );
};

export function HelpUs() {
  const bg = useColorModeValue("blue.800", "#142F3E");
  const color = useColorModeValue("whiteAlpha.800", "whiteAlpha.900");

  return (
    <Box bg={bg} color={color}>
      <Container maxW={"7xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 14, lg: 16 }}
          mt={-10}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            lineHeight={"110%"}
          >
            Veja como podemos lhe ajudar
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: 1, lg: 6 }}>
            <Box
              borderRadius="lg"
              overflow="hidden"
              backdropFilter="auto"
              backdropBlur="1rem"
              bgColor={"whiteAlpha.50"}
              shadow={"xl"}
              rounded={"lg"}
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcIdea} w={16} h={16} />}
                            text={"Ideação: Viabilidade Jurídica da Ideia"}
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
                    Existe a obrigação de ter alguma certificação ou registro em
                    algum órgão? <br />
                    Consigo desenvolver a regulamentação junto ao legislativo?{" "}
                    <br />
                    <b>
                      SERVIÇOS: Pesquisa de viabilidade jurídica + viabilidade
                      de construção legislativa
                    </b>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcSignature} w={16} h={16} />}
                            text={
                              "Formação: Ainda não é a hora de registrar a empresa"
                            }
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
                      SERVIÇO: Elaboração de um MoU (memorando de entendimentos
                      entre sócios)
                    </b>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcSettings} w={16} h={16} />}
                            text={
                              "Criação/Tração: O negócio já possui viabilidade jurídica, o empreendedor coloca a mão na massa para resolver uma dor do mercado "
                            }
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Como contratar desenvolvedores, programadores, designers e
                    outros prestadores de serviços? <br />
                    <b>
                      SERVIÇOS: Contratos com terceiros + Contratos de vesting +
                      Formalizar cessão dos direitos autorais de software Como
                      falar do projeto para essas e outras pessoas (como
                      investidores) sem que a "ideia" seja divulgada?{" "}
                    </b>
                    <br />
                    <b> SERVIÇO: Termos/cláusulas de confidencialidade </b>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcInspection} w={16} h={16} />}
                            text={
                              "Validação: Testes moderados do MVP (Produto Mínimo Viável) no mercado"
                            }
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <b>
                      SERVIÇOS: Formalizar a empresa (tipo societário e regime
                      de tributação) + Busca prévia INPI + Registrar
                      marca/patente.
                    </b>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcPositiveDynamic} w={16} h={16} />}
                            text={
                              "Operação/Escala: Oferecimento ao público em grande escala"
                            }
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Relacionamento com clientes. <br />
                    <b>SERVIÇOS: Termo de Uso + Política de Privacidade</b>{" "}
                    <br />
                    Formalização dos negócios. <br />
                    <b>
                      SERVIÇOS: Compliance + Governança (trabalhista, dados,
                      etc).
                    </b>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={FcConferenceCall} w={16} h={16} />}
                            text={
                              "Investidores: O mercado quer fazer parte do negócio"
                            }
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
            </Box>
          </SimpleGrid>
          <ButtonCta />
        </Stack>
      </Container>
    </Box>
  );
}
