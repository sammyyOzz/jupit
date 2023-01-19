import { Box, Flex, Image, Text } from '@chakra-ui/react'
import hideIcon from '../../../assets/hide-detail.png'

function BalanceCard() {
  return (
    <Box h="121px" w="290px" bg="primary" m={2} borderRadius="10px" p={4}>
      <Flex justify="space-between" align="center" mb={3}>
        <Flex align="center">
          <Text mr={2} color="#D2D2E9" fontSize="13px">Naira Balance</Text>
          <Image src={hideIcon} alt="" />
        </Flex>
        <Text color="#D2D2E9" fontSize="13px" mr={3}>Jupit</Text>
      </Flex>
      <Text fontWeight="bold" fontSize="25px" color="white">₦89,909,009</Text>
      <Text fontSize="15px" color="#D2D2E9">= $340.56</Text>
    </Box> 
  )
}

export default BalanceCard