import { Img, HTMLChakraProps } from "@chakra-ui/react";
import imgLogo2 from "./assets/logobrancapequena.svg";

export const Logo = (props: HTMLChakraProps<"img">) => (
  <Img color="accent" height="12" width="12" src={imgLogo2} {...props} />
);
