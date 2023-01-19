import { Box, Button } from '@chakra-ui/react'
import { WalletHeader, ListAssets, ListBalance } from '../../features/wallet'

function Dashboard() {
  return (
    <>
      <WalletHeader />
      <ListBalance />
      <Box m={5}>
        <Button bg="primary" color="white" p="25px 50px" mr={3}>
          Fund
        </Button>
        <Button bg="white" border="1px solid #c4c1c1" p="25px 40px">
          Withdraw
        </Button>
      </Box>
      <ListAssets />
    </>
  )
}

export default Dashboard