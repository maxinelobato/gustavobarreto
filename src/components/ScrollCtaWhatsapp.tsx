import {
  Icon,
  IconButton,
  Link,
  Stack,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

export function ScrollCtaWhatsapp() {
  const color = useColorModeValue('whiteAlpha.800', 'whiteAlpha.900');
  const borderColor = useColorModeValue('whiteAlpha.100', 'whiteAlpha.200');

  return (
    <Stack
      position="fixed"
      zIndex={2}
      bottom="30px"
      right="30px"
      justifyContent="center"
      alignItems="center"
    >
      <Tooltip
        backdropFilter="auto"
        backdropBlur="1rem"
        rounded="md"
        bgColor={'blackAlpha.500'}
        shadow={'xl'}
        border={'1px solid'}
        color={color}
        borderColor={borderColor}
        label="Fale Comigo"
        placement="top"
        isOpen
      >
        <Link
          style={{ textDecoration: 'none' }}
          href="https://api.whatsapp.com/send?phone=5513996680686&text=Ol%C3%A1%2C%20Dr.%20Gustavo!%20Vim%20do%20seu%20site.%20Podemos%20conversar%3F"
          isExternal
        >
          <IconButton
            color={color}
            aria-label="behavior"
            bgColor="green.500"
            variant="solid"
            w={14}
            h={14}
            shadow="base"
            _hover={{
              bgColor: 'green.600',
              transform: 'scale(1.1)',
              border: '1px',
              borderColor: 'whiteAlpha.900',
            }}
            isRound
          >
            <Icon as={FaWhatsapp} w={8} h={8} />
          </IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
}
