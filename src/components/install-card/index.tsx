import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import playVectorImage from "../../assets/play-vector.png"

interface InstallCardProps {
  children: React.ReactNode
}

function InstallCard({ children }: InstallCardProps) {
  return (
    <Flex align="center">
      <Image src={playVectorImage} alt="" h="20px" w="20px" />
      <Box pl="25px">
        <Text color="#090931" fontSize="20px" fontWeight="500" >
          { children }
        </Text>
      </Box>
    </Flex>
  )
}

export default InstallCard