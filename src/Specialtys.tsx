import {
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex
        justifyContent={{ base: "center", md: "center" }}
        direction={{ base: "column-reverse", md: "column" }}
      >
        <Box pl={{ base: 2, md: 4 }} textAlign="center">
          <StatLabel fontWeight={"medium"}>{title}</StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <VStack>
          <Box
            my={"auto"}
            color={useColorModeValue("gray.800", "gray.200")}
            alignContent={"center"}
          >
            {icon}
          </Box>
        </VStack>
      </Flex>
    </Stat>
  );
}

export function Specialty() {
  return (
    <Container maxW="7xl">
      <Stack
        spacing={{ base: 8, md: 14 }}
        direction={{ base: "row", md: "row" }}
        mt={{ base: -10, md: -28 }}
        mb={{ base: 14, md: 20 }}
      >
        <Box mx={"auto"} px={{ base: 2, sm: 12, md: 10 }}>
          <SimpleGrid columns={{ base: 2, md: 5 }} spacing={{ base: 5, lg: 5 }}>
            <StatsCard
              title={"Referência em "}
              stat={"Santos/SP"}
              icon={<BsPerson size={"3em"} />}
            />
            <StatsCard
              title={"Atendimento"}
              stat={"Online e Presencial"}
              icon={<FiServer size={"3em"} />}
            />
            <StatsCard
              title={"Datacenters"}
              stat={"7"}
              icon={<GoLocation size={"3em"} />}
            />
            <StatsCard
              title={"Datacenters"}
              stat={"7"}
              icon={<GoLocation size={"3em"} />}
            />
            <StatsCard
              title={"Datacenters"}
              stat={"7"}
              icon={<GoLocation size={"3em"} />}
            />
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
}
