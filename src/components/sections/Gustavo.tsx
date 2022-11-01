import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import imgGustavo from "../../assets/img/gustavo.webp";
import { ButtonCta } from "../ButtonCta";

export function Gustavo() {
  const bg = useColorModeValue("blue.800", "#142F3E");
  const color = useColorModeValue("whiteAlpha.800", "whiteAlpha.900");
  const borderColor = useColorModeValue("whiteAlpha.100", "whiteAlpha.200");

  return (
    <Box bg={bg} color={color}>
      <Container maxW={"7xl"}>
        <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
          <Flex align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading
                fontWeight={700}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                lineHeight={"110%"}
                textAlign={{ base: "center", md: "left" }}
              >
                Conheça o Especialista
                <br />
              </Heading>
              <Text
                color={"whiteAlpha.800"}
                fontWeight={500}
                fontSize={{ base: "md", sm: "lg", md: "large" }}
                textAlign={{ base: "center", md: "left" }}
              >
                Advogado, formado pela Universidade Católica de Santos, pós
                graduando em Constelações Familiares pela Hellinger Schule.{" "}
                <br />
                Escutar ativamente e dar voz ao outro é de suma importância para
                que as relações em todas instâncias venham a fluir com
                eficiência e qualidade. <br />
                Com esse sentimento, decidi abrir meu próprio escritório de
                advocacia me colocando à disposição para impulsionar
                empreendedores a decolarem em seus negócios com segurança e sem
                burocracia para que possam se concentrar no que realmente
                importa! Vamos olhar juntos?! <br />
                <i>Startup</i>
              </Text>
              <Stack
                pt={6}
                direction={{ base: "column", md: "row" }}
                spacing={4}
              >
                <ButtonCta />
              </Stack>
            </Stack>
          </Flex>
          <Flex
            py={{ base: 10, md: 14, lg: 16 }}
            mt={-10}
            flex={1}
            align={"center"}
            justifyContent={{ base: "end", md: "end" }}
          >
            <Image
              shadow={"dark-lg"}
              rounded={"lg"}
              border={"1px solid"}
              borderColor={borderColor}
              alt={"Login Image"}
              width={500}
              height={{ base: 350, md: 560, lg: 600 }}
              src={imgGustavo}
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
