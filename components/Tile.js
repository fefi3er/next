import { Box, Flex, Link, Image, Text } from "@chakra-ui/react";
import { AiOutlineMore } from "react-icons/ai";

export default function Tile({ tile, children, css }) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  try {
    const domain = new URL(tile.url)
    const ico = domain.origin + '/favicon.ico'
    return <Box
      boxSize={112}
      p={4}
      textAlign="center"
      position="relative"
      borderRadius="lg"
      css={css}
    >
      <Link href={tile.url}>
        <Flex
          mx="auto"
          boxSize="48px"
          backgroundColor="gray.300"
          borderRadius="full"
          alignItems="center"
          justifyContent="center"
        >
          <Image boxSize="24px" src={ico} />
        </Flex>
        <Text
          w="80px"
          mt={3}
          fontSize={12}
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
          textShadow="-moz-initial"
        >
          {tile.title}
        </Text>
      </Link>
      {children}
    </Box>;
  } catch (e) {
    const ico = '/favicon.ico'
    return <Box
      boxSize={112}
      p={4}
      textAlign="center"
      position="relative"
      borderRadius="lg"
      css={css}
    >
      <Link href={tile.url}>
        <Flex
          mx="auto"
          boxSize="48px"
          backgroundColor="gray.300"
          borderRadius="full"
          alignItems="center"
          justifyContent="center"
        >
          <Image boxSize="24px" src={ico} />
        </Flex>
        <Text
          w="80px"
          mt={3}
          fontSize={12}
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
          textShadow="-moz-initial"
        >
          {tile.title}
        </Text>
      </Link>
      {children}
    </Box>;
  }
}
