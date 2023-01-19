import { Flex } from '@chakra-ui/react'
import React from 'react'
import BalanceCard from './balance-card'

function ListBalance() {
  return (
    <Flex>
      {Array(3).fill(null).map((_, i) => <BalanceCard key={i} />)}
    </Flex>
  )
}

export default ListBalance