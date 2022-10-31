import { Button, Stack } from "@chakra-ui/react";

export function ButtonCta() {
  return (
    <Stack
      direction={"column"}
      spacing={3}
      align={"center"}
      alignSelf={"center"}
      position={"relative"}
    >
      <Button
        textTransform="uppercase"
        size="lg"
        bgColor="whiteAlpha.900"
        color="#142F3E"
        boxShadow={"2px -1px 10px 2px rgb(255 255 225 / 80%)"}
        _hover={{
          bgColor: "blue.800",
          color: "whiteAlpha.900",
        }}
      >
        fale com o especialista
      </Button>
    </Stack>
  );
}
