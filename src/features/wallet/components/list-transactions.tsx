import { Box } from '@chakra-ui/react'
import TransactionCard from './transaction-card'

function ListTransactions() {
  return (
    <Box p={3}>
      {Array(3).fill(null).map((_, i) => <TransactionCard key={i} />)}
    </Box>
  )
}

export default ListTransactions