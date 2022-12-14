import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { IoRocket } from 'react-icons/io5';
import { FaHandHoldingHeart, FaHandsHelping } from 'react-icons/fa';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  const color = useColorModeValue('brandbeige.100', 'brandbeige.200');
  const borderColor = useColorModeValue('whiteAlpha.100', 'whiteAlpha.200');

  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      backdropFilter="auto"
      backdropBlur="1rem"
      bgColor={'whiteAlpha.50'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={borderColor}
      rounded={'lg'}
    >
      <Flex
        justifyContent={{ base: 'center', md: 'center' }}
        direction={{ base: 'column-reverse', md: 'column' }}
      >
        <Box alignContent="center">
          <StatLabel fontWeight={'medium'}>{title}</StatLabel>
          <StatNumber fontSize={'lg'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <VStack>
          <Box pt={6} my={'auto'} color={color}>
            {icon}
          </Box>
        </VStack>
      </Flex>
    </Stat>
  );
}

export function Specialty() {
  const bg = useColorModeValue('brandblue.500', 'brandblue.600');
  const color = useColorModeValue('brandbeige.100', 'brandbeige.200');

  return (
    <Box bg={bg} color={color}>
      <Container maxW={'7xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 14, lg: 16 }}
        >
          <SimpleGrid columns={{ base: 2, md: 5 }} spacing={{ base: 5, lg: 5 }}>
            <StatsCard
              title={'ReferĂȘncia em '}
              stat={'Santos/SP'}
              icon={<BsStarFill size={'3em'} />}
            />
            <StatsCard
              title={'Atendimento'}
              stat={'Online/Presencial'}
              icon={<BiSupport size={'3em'} />}
            />
            <StatsCard
              title={'Compromisso com'}
              stat={'Seus Direitos'}
              icon={<FaHandsHelping size={'3em'} />}
            />
            <StatsCard
              title={'Atendimento'}
              stat={'Personalizado'}
              icon={<FaHandHoldingHeart size={'3em'} />}
            />
            <StatsCard
              title={'Especialista em'}
              stat={'Startups'}
              icon={<IoRocket size={'3em'} />}
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
