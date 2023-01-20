import { Box, Flex, Image, Text } from '@chakra-ui/react'
import hideIcon from '../../../assets/hide-detail.png'

interface BalanceCardProps {
  name: string;
  balance: number | string;
  usdAmount: number;
}

function BalanceCard({ name, balance, usdAmount }: BalanceCardProps) {
  return (
    <Box h="121px" minW="290px" bg="primary" m={2} borderRadius="10px" p={4}>
      <Flex justify="space-between" align="center" mb={3}>
        <Flex align="center">
          <Text mr={2} color="#D2D2E9" fontSize="13px">{name} Balance</Text>
          <Image src={hideIcon} alt="" />
        </Flex>
        <Text color="#D2D2E9" fontSize="13px" mr={3}>Jupit</Text>
      </Flex>
      <Text fontWeight="bold" fontSize="25px" color="white">{balance}</Text>
      <Text fontSize="15px" color="#D2D2E9">= ${usdAmount ? usdAmount.toFixed(2) : '***'}</Text>
    </Box> 
  )
}

export default BalanceCard