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
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  FcIdea,
  FcInspection,
  FcSettings,
  FcPositiveDynamic,
  FcSignature,
  FcConferenceCall,
} from "react-icons/fc";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  const borderColor = useColorModeValue("whiteAlpha.100", "whiteAlpha.200");
  const color = useColorModeValue("whiteAlpha.800", "whiteAlpha.900");

  return (
    <Stat
      backdropFilter="auto"
      backdropBlur="1rem"
      bgColor={"whiteAlpha.50"}
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={borderColor}
      rounded={"lg"}
    >
      <Flex
        justifyContent={{ base: "center", md: "center" }}
        direction={{ base: "column-reverse", md: "column" }}
      >
        <Box alignContent="center">
          <StatLabel fontWeight={"medium"}>{title}</StatLabel>
          <StatNumber fontSize={"lg"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <VStack>
          <Box pt={6} my={"auto"} color={color}>
            {icon}
          </Box>
        </VStack>
      </Flex>
    </Stat>
  );
}

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
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              backdropFilter="auto"
              backdropBlur="1rem"
              bgColor={"whiteAlpha.50"}
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <FcIdea size={"3em"} />
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <FcSignature size={"3em"} />
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            {/* <StatsCard
              title={"Viabilidade Jurídica"}
              stat={"Ideação"}
              icon={<FcIdea size={"3em"} />}
            />
            <StatsCard
              title={"Memorando Societário"}
              stat={"Formação"}
              icon={<FcSignature size={"3em"} />}
            />
            <StatsCard
              title={"Resolução de Problemas"}
              stat={"Criação/Tração"}
              icon={<FcSettings size={"3em"} />}
            />
            <StatsCard
              title={"Produto Mínimo Viável"}
              stat={"Validação"}
              icon={<FcInspection size={"3em"} />}
            />
            <StatsCard
              title={"Oferecimento ao Público"}
              stat={"Operação/Escala"}
              icon={<FcPositiveDynamic size={"3em"} />}
            />
            <StatsCard
              title={"Mercado Faz Parte"}
              stat={"Startups"}
              icon={<FcConferenceCall size={"3em"} />}
            /> */}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
