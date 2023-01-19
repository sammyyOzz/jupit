import { Box, Flex, Image, Text } from '@chakra-ui/react'
import bellIcon from '../../../assets/bell.png'

function WalletHeader() {
  return (
    <Flex justify="space-between" align="center" p="20px 30px">
      <Box>
        <Text>Hi <span style={{ fontWeight: 500 }}>Femi,</span></Text>
      </Box>
      <Box position="relative">
        <Image src={bellIcon} alt="" h="23px" w="23px" />
        <Flex 
          position="absolute" 
          top="-2px" 
          right="-5px"
          bg="red.500"
          borderRadius="50%"
          h="16px"
          w="16px"
        >
          <Text fontWeight={600} color="white" fontSize="12px" m="auto">3</Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export default WalletHeader