import {
  Card,
  Stack,
  CardBody,
  Text,
  CardFooter,
  Button,
  Heading,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FcIdea } from 'react-icons/fc';

export function CardServices() {
  return (
    <Flex
      py={{ base: 10, md: 14, lg: 16 }}
      mt={-10}
      flex={1}
      align={'center'}
      justifyContent={{ base: 'left', md: 'left' }}
    >
      <Card
        align={{ base: 'center', md: 'left' }}
        direction={{ base: 'column', md: 'row' }}
        overflow="hidden"
        variant="unstyled"
      >
        <Icon as={FcIdea} w={200} h={200} />
        <Stack>
          <CardBody textAlign={{ base: 'center', md: 'left' }}>
            <Heading size="lg">Ideação</Heading>
            <Text as={'span'} size={'md'}>
              Viabilidade Jurídica da Ideia
            </Text>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Saiba mais
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
}
