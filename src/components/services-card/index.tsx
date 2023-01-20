import { Box, Flex, Image, Text } from '@chakra-ui/react'

export interface ServicesCardProps {
  title: string;
  text: string;
  icon: string;
}

function ServicesCard({ title, text, icon }: ServicesCardProps) {
  return (
    <Box textAlign="center">
      <Flex 
        bg="rgba(242, 146, 29, 0.15)"
        h="131px"
        w="131px"
        borderRadius="50%"
        mx="auto"
        mb="50px"
        justify="center"
        align="center"
      >
        <Image src={icon} alt="" />
      </Flex>
      <Text color="#090931" fontWeight="bold" fontSize="28px">
        { title }
      </Text>
      <Text color="#777777" fontSize="20px" my="50px">
        { text }
      </Text>
    </Box>
  )
}

export default ServicesCard