import {
  Box,
  chakra,
  Container,
  Image,
  Link,
  Stack,
  Text,
  textDecoration,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { ReactNode } from "react";
import imgLogo1 from "../../assets/img/logobrancagrande.svg";

const SocialButton = ({ children }: { children: ReactNode }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      {children}
    </chakra.button>
  );
};

export function Footer() {
  const bg = useColorModeValue("blue.800", "#142F3E");
  const color = useColorModeValue("whiteAlpha.800", "whiteAlpha.900");

  return (
    <Box bg={bg} color={color}>
      <Container
        as={Stack}
        maxW={"7xl"}
        py={8}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Image height="5rem" width="15rem" src={imgLogo1} />
      </Container>
      <Container
        as={Stack}
        maxW={"7xl"}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={2} pb={8}>
          <SocialButton>
            <Link
              style={{ textDecoration: "none" }}
              href={"https://www.linkedin.com/in/gustavolimabarreto/"}
              isExternal
            >
              <FaLinkedin />
            </Link>
          </SocialButton>
          <SocialButton>
            <Link
              style={{ textDecoration: "none" }}
              href={"https://www.instagram.com/glb.advocacia/"}
              isExternal
            >
              <FaInstagram />
            </Link>
          </SocialButton>
        </Stack>
      </Container>
      <Container
        as={Stack}
        maxW={"7xl"}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6} pb={8} justifyContent={"center"}>
          <Text fontSize={"sm"} textAlign={"center"}>
            Santos | São Paulo | Brasil
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
