import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { 
  WalletHeader, 
  ListAssets, 
  ListBalance, 
  ListTransactions,
  WalletSidebar,
  WalletNavbar
} from '../../features/wallet'
import { useGetCryptoPriceQuery } from '../../features/wallet/redux/wallet-api';


function Dashboard() {
  return (
    <>
      <WalletHeader />
      <Flex>
        <Box display={['none', null, 'block']} w="35%">
          <WalletSidebar />
        </Box>

        <Box w={['100%', null, '75%']} pb={['70px', null, 0]} m={5}>
          <ListBalance />
          <Flex m={5} justify="center">
            <Button bg="primary" color="white" p="25px 50px" mr={3}>
              Fund
            </Button>
            <Button bg="white" border="1px solid #c4c1c1" p="25px 40px">
              Withdraw
            </Button>
          </Flex>
          <Flex justify="space-between" p={3}>
            <Text fontWeight="bold">Assets</Text>
            <Text fontWeight="bold" color="primary">See all</Text>
          </Flex>
          <ListAssets />

          <Flex justify="space-between" p={3}>
            <Text fontWeight="bold">Recent Transactions</Text>
            <Text fontWeight="bold" color="primary">See all</Text>
          </Flex>
          <ListTransactions />
        </Box>
      </Flex>

      <WalletNavbar />
    </>
  )
}

export default Dashboard