import { Flex } from '@chakra-ui/react'
import AssetCard from './asset-card'

function ListAssets() {
  return (
    <Flex>
      {Array(3).fill(null).map((_, i) => <AssetCard key={i} />)}
    </Flex>
  )
}

export default ListAssets