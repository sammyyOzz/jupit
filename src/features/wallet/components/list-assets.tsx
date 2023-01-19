import { Flex } from '@chakra-ui/react'
import { hideScrollbarStyles } from '../styles'
import AssetCard from './asset-card'

function ListAssets() {
  return (
    <Flex overflowX="scroll" css={hideScrollbarStyles}>
      {Array(6).fill(null).map((_, i) => <AssetCard key={i} />)}
    </Flex>
  )
}

export default ListAssets