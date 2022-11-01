import { Button, Link, Stack } from "@chakra-ui/react";

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
        <Link
          style={{ textDecoration: "none" }}
          href="https://api.whatsapp.com/send?phone=5513974086149&text=Ol%C3%A1%2C%20Dr.%20Gustavo!%20Vim%20do%20seu%20site.%20Podemos%20conversar%3F"
          isExternal
        >
          fale com o especialista
        </Link>
      </Button>
    </Stack>
  );
}
