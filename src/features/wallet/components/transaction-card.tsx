import { Box, Flex, Image, Text } from '@chakra-ui/react'
import txnUp from '../../../assets/txn-up.png'

function TransactionCard() {
  return (
    <Flex justify="space-between" color="primary" m={3}>
      <Flex align="center">
        <Image src={txnUp} alt="" h="20px" w="20px" mr={3} />
        <Box>
          <Text fontWeight={600}>₦1,000,000.00</Text>
          <Text fontSize="13px">Deposit</Text>
        </Box>
      </Flex>
      <Text fontSize="14px">Jan 30, 2022</Text>
    </Flex>
  )
}

export default TransactionCard