import { Box, BoxProps } from "@chakra-ui/react";
import imgBG from "./assets/startup1.webp";

export function BgBoxImage(props: BoxProps) {
  return (
    <Box
      w="100%"
      h={{ base: "60vh", md: "100vh" }}
      bgImage={imgBG}
      bgSize={"cover"}
      bgPosition={"center center"}
      {...props}
    />
  );
}
