import {
  AspectRatio,
  Container,
} from "@chakra-ui/react";

export function GoogleMaps() {
  return (
      <Container maxW={"7xl"}>
        <AspectRatio ratio={{ base: 16 / 8, md: 16 / 6, lg: 16 / 4 }}>
          <iframe
            style={{
              borderRadius: "6px",
              borderColor: "whiteAlpha.50",
              boxShadow: "dark-lg",
              overflow: "hidden",
            }}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.4238255168516!2d-49.89710248531503!3d-6.073444295601868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92dd505592534f39%3A0x379cc9cb54dfef48!2sAv.%20Tocantins%2C%208%20-%20Rio%20Verde%2C%20Parauapebas%20-%20PA%2C%2068515-000!5e0!3m2!1spt-PT!2sbr!4v1667326072399!5m2!1spt-PT!2sbr" width="400" height="250" style="border:0;border-radius:50%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          />
        </AspectRatio>
      </Container>
  );
}
