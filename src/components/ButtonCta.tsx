import { Button, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import Jump from 'react-reveal/Jump';

export function ButtonCta() {
  const bg = useColorModeValue('brandorange.500', 'orange.600');
  const color = useColorModeValue('brandbeige.100', 'brandbeige.200');

  return (
    <Stack
      direction={'column'}
      spacing={3}
      align={'center'}
      alignSelf={'center'}
      position={'relative'}
    >
      <Jump forever>
        <Button
          textTransform="uppercase"
          size="lg"
          bgColor={bg}
          color={color}
          boxShadow={'2px -1px 10px 2px rgb(255 255 225 / 80%)'}
          _hover={{
            bgColor: 'orange.400',
            color: 'whiteAlpha.900',
          }}
        >
          <Link
            style={{ textDecoration: 'none' }}
            href="https://api.whatsapp.com/send?phone=5513974086149&text=Ol%C3%A1%2C%20Dr.%20Gustavo!%20Vim%20do%20seu%20site.%20Podemos%20conversar%3F"
            isExternal
          >
            fale com o especialista
          </Link>
        </Button>
      </Jump>
    </Stack>
  );
}
