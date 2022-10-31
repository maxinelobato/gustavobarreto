import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BgBoxImage } from "../BgBoxImage";
import { ButtonCta } from "../ButtonCta";

export function About() {
  const bg = useColorModeValue("blue.800", "#142F3E");
  const color = useColorModeValue("whiteAlpha.800", "whiteAlpha.900");
  const textColor = useColorModeValue("blue.500", "blue.300");

  return (
    <Box bg={bg} color={color}>
      <BgBoxImage>
        <Container maxW={"7xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 32, lg: 36 }}
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
              Receba toda a ajuda jurídica necessária para a sua <i>Startup</i>
            </Text>
            <ButtonCta />
          </Stack>
        </Container>
      </BgBoxImage>
    </Box>
  );
}
