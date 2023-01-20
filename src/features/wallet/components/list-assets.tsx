import { Flex } from '@chakra-ui/react'
import { assetData } from '../data';
import { useGetCryptoPriceQuery } from '../redux/wallet-api';
import { hideScrollbarStyles } from '../styles'
import AssetCard from './asset-card'

function ListAssets() {
  const { data, error, isLoading } = useGetCryptoPriceQuery({ 
    ids: 'bitcoin,ethereum,tether', 
    vs_currencies: 'usd', 
    include_24hr_change: "true",
    precision: '4'
  });

  return (
    <Flex overflowX="scroll" css={hideScrollbarStyles}>
      <AssetCard 
        name={assetData.tether.name}
        image={assetData.tether.image}
        shortName={assetData.tether.shortName}
        usdPrice={data?.tether?.usd}
        usd24HourChange={data?.tether?.usd_24h_change}
      />
      <AssetCard 
        name={assetData.bitcoin.name}
        image={assetData.bitcoin.image}
        shortName={assetData.bitcoin.shortName}
        usdPrice={data?.bitcoin?.usd}
        usd24HourChange={data?.bitcoin?.usd_24h_change}
      />
      <AssetCard 
        name={assetData.ethereum.name}
        image={assetData.ethereum.image}
        shortName={assetData.ethereum.shortName}
        usdPrice={data?.ethereum?.usd}
        usd24HourChange={data?.ethereum?.usd_24h_change}
      />
    </Flex>
  )
}

export default ListAssets