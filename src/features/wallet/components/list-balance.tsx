import { Flex } from '@chakra-ui/react'
import { hideScrollbarStyles } from '../styles'
import BalanceCard from './balance-card'

function ListBalance() {
  return (
    <Flex overflowX="scroll" css={hideScrollbarStyles}>
      {Array(3).fill(null).map((_, i) => <BalanceCard key={i} />)}
    </Flex>
  )
}

export default ListBalance