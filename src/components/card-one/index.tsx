import { Box, Flex, Image, Text } from '@chakra-ui/react'

interface CardOneProps {
  image: string;
  text: string;
  top?: any;
  right?: string;
  left?: string;
  bottom?: string;
}

function CardOne({ image, text, top, right, left, bottom }: CardOneProps) {
  return (
    <Flex 
      borderRadius="30px" 
      p="20px" 
      justify="center" 
      align="center" 
      w="fit-content" 
      boxShadow="2px 4px 8px rgba(0, 0, 0, 0.1)"
      position="absolute"
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      bg="white"
    >
      <Image src={image} alt="" />
      <Box pl={2}>
        <Text 
          mb="4px" 
          color="primary" 
          fontWeight={600} 
          fontSize="14px"
        >
          { text }
        </Text>
        <Box bg="#D9D9D9" w="80%" h="5px" mb="5px" />
        <Box bg="#D9D9D9" w="60%" h="5px" />
      </Box>
    </Flex>
  )
}

export default CardOne