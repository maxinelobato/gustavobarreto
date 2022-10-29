import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import Fade from "react-reveal/Fade";
import { BgBoxImage } from "./BgBoxImage";
import { Specialty } from "./Specialtys";

function App() {
  const bg = useColorModeValue("blue.800", "#142F3E");
  const color = useColorModeValue("whiteAlpha.800", "whiteAlpha.900");
  const textColor = useColorModeValue("blue.200", "blue.300");

  return (
    <>
      <Box bg={bg} color={color}>
        <BgBoxImage>
          <Navbar />
          <Container maxW={"7xl"}>
            <Stack
              as={Box}
              textAlign={"center"}
              spacing={{ base: 8, md: 14 }}
              py={{ base: 20, md: 36 }}
            >
              <Heading
                fontWeight={700}
                fontSize={{ base: "3xl", sm: "4xl", md: "7xl" }}
                lineHeight={"110%"}
              >
                Procurando um Advogado Empresarial Especialista <br />
                <Text as={"span"} textColor={textColor}>
                  em <i>Startup?</i>
                </Text>
              </Heading>
              <Text
                color={"whiteAlpha.800"}
                fontWeight={500}
                fontSize={{ base: "md", sm: "lg", md: "2xl" }}
              >
                Receba toda a ajuda jurídica necessária para a sua{" "}
                <i>Startup</i>
              </Text>
              <Stack
                direction={"column"}
                spacing={3}
                align={"center"}
                alignSelf={"center"}
                position={"relative"}
              >
                <Button
                  textTransform="uppercase"
                  shadow="lg"
                  size="lg"
                  bgColor="whiteAlpha.900"
                  color="#142F3E"
                  _hover={{ bgColor: "blue.800", color: "whiteAlpha.900" }}
                >
                  fale com o especialista
                </Button>
              </Stack>
            </Stack>
          </Container>
        </BgBoxImage>
        {/* Section Two */}
        <Specialty />
        {/* Section Three */}
        <Container maxW="7xl">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 2, md: 2 }}
          >
            <Heading
              fontWeight={700}
              fontSize={{ base: "2xl", sm: "4xl", md: "7xl" }}
              lineHeight={"100%"}
            >
              Procurando um Advogado Empresarial para a <br />
              <Text as={"span"} textColor={textColor}>
                sua Startup?
              </Text>
            </Heading>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                textTransform="uppercase"
                shadow="lg"
                size="lg"
                bgColor="whiteAlpha.900"
                color="#142F3E"
                _hover={{ bgColor: "blue.800", color: "whiteAlpha.900" }}
              >
                fale com o especialista
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default App;
