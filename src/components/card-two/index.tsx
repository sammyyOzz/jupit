import { Box, Image, Text } from "@chakra-ui/react"
import whiteCircleImage from "../../assets/white-circle.png"
import blueCircleImage from "../../assets/blue-circle.png"
import twoBlueArrows from "../../assets/two-blue-arrows.png"
import twoYellowArrows from "../../assets/two-yellow-arrows.png"

interface  CardTwoProps {
  title: string;
  text: string;
  blueBg?: boolean;
}

function CardTwo({ title, text, blueBg }: CardTwoProps) {
  return (
    <Box 
      boxShadow="0px 4px 4px rgba(196, 196, 196, 0.25)"
      boxSizing="border-box"
      p="20px"
      textAlign="center"
      bg={!blueBg ? 'white' : 'linear-gradient(180deg, #1C1D93 0%, #3A3B8F 100%)'}
      borderRadius="30px"
      position="relative"
      color={!blueBg ? 'dark' : 'white'}
    >
      <Image 
        src={!blueBg ? whiteCircleImage : blueCircleImage} 
        alt="" 
        h="80px"
        w="80px"
        position="absolute"
        left="50%"
        ml="-40px"
        top="30px"
      />
      <Image 
        src={!blueBg ? twoBlueArrows : twoYellowArrows} 
        alt="" 
        h="40px"
        w="40px"
        position="absolute"
        left="50%"
        ml="-20px"
        top="50px"
      />
      <Text mt="120px" mb="10px" fontSize="28px" fontWeight={600}>
        { title }
      </Text>
      <Text fontSize="15px" mb="15px">
        { text }
      </Text>
      <Text fontSize="15px" color={!blueBg ? 'primary' : 'white'}>
        Get Started
      </Text>
    </Box>
  )
}

export default CardTwo