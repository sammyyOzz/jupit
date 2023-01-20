import { Flex } from '@chakra-ui/react'
import { hideScrollbarStyles } from '../styles'
import BalanceCard from './balance-card'
import { assetData } from '../data'
import { useGetCryptoPriceQuery } from '../redux/wallet-api';

function ListBalance() {
  const { data } = useGetCryptoPriceQuery({ 
    ids: 'bitcoin,ethereum,tether', 
    vs_currencies: 'usd', 
    include_24hr_change: "true",
    precision: '4'
  });

  return (
    <Flex overflowX="scroll" css={hideScrollbarStyles}>
      <BalanceCard 
        name={assetData.naira.name}
        balance={assetData.naira.balance}
        usdAmount={340.56}
      />
      <BalanceCard 
        name={assetData.bitcoin.name}
        balance={assetData.bitcoin.balance}
        usdAmount={assetData.bitcoin.balance * data?.bitcoin.usd}
      />
      <BalanceCard 
        name={assetData.ethereum.name}
        balance={assetData.ethereum.balance}
        usdAmount={assetData.ethereum.balance * data?.ethereum.usd}
      />
    </Flex>
  )
}

export default ListBalance