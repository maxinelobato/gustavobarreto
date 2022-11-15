import { Button, Link, Stack, useColorModeValue } from '@chakra-ui/react';

export function ButtonCta() {
  const color = useColorModeValue('brandbeige.100', 'brandbeige.200');

  return (
    <Stack
      direction={'column'}
      spacing={3}
      align={'center'}
      alignSelf={'center'}
      position={'relative'}
    >
      <Button
        fontWeight={'medium'}
        size="lg"
        color={color}
        boxShadow={'lg'}
        bgGradient="linear(to-r, brandorange.500, brandorange.600)"
        _hover={{
          bgColor: 'orange.400',
          color: 'whiteAlpha.900',
          transform: 'scale(1.1)',
        }}
      >
        <Link
          style={{ textDecoration: 'none' }}
          href="https://api.whatsapp.com/send?phone=5513996680686&text=Ol%C3%A1%2C%20Dr.%20Gustavo!%20Vim%20do%20seu%20site.%20Podemos%20conversar%3F"
          isExternal
        >
          Fale com o Especialista
        </Link>
      </Button>
    </Stack>
  );
}
