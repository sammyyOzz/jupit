import { Box, Flex, Image, Text } from '@chakra-ui/react'
import avatarIcon from '../../assets/avatar-black.png'

export interface TestimonialCardProps {
  name: string;
  title: string;
  text: string;
}

function TestimonialCard({ name, title, text }: TestimonialCardProps) {
  return (
    <Box 
      p="40px 50px"
      textAlign="center" 
      borderRadius="5px"
      bg="linear-gradient(180deg, #FFFFFF 0%, #FFF9EE 100%)"
    >
      <Flex 
        bg="#DDFFE7"
        border="1px solid #000000"
        h="74px"
        w="74px"
        borderRadius="50%"
        mx="auto"
        mb="10px"
        justify="center"
        align="center"
      >
        <Image src={avatarIcon} alt="" />
      </Flex>
      <Text color="primary" fontSize="20px" mb="10px">
        { name }
      </Text>
      <Text color="#FFA000" fontWeight="bold" fontSize="22px" mb="10px">
        { title }
      </Text>
      <Text color="#3D3D3D" fontSize="16px">
        { text }
      </Text>
    </Box>
  )
}

export default TestimonialCard