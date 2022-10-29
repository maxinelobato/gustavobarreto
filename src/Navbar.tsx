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
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IoLogoWhatsapp } from "react-icons/io";
import imgLogo1 from "./assets/logobrancagrande.svg";
import imgLogo2 from "./assets/logobrancapequena.svg";

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        px={4}
        backdropFilter="auto"
        backdropBlur="1rem"
        w={"full"}
        position={"fixed"}
        zIndex={2}
      >
        <Container maxW="7xl">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
              transition={"1.2seg"}
            >
              <Image color="accent" width="16" height="16" src={imgLogo2} />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                color={useColorModeValue("gray.800", "white")}
              >
                <Image
                  display={{ base: "none", md: "inline-flex" }}
                  color="accent"
                  height="12"
                  width="18"
                  src={imgLogo1}
                />
              </Text>
            </Flex>
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={2}>
                <Button
                  bgColor="#142F3E"
                  _hover={{ bgColor: "blue.800", color: "whiteAlpha" }}
                  leftIcon={<IoLogoWhatsapp size={22} />}
                >
                  (13) 97408-6149
                </Button>
                <Button
                  bgColor="#142F3E"
                  _hover={{ bgColor: "blue.800", color: "whiteAlpha" }}
                  onClick={toggleColorMode}
                >
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
