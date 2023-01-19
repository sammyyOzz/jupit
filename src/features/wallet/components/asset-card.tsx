import { Box, Flex, Image, Text } from '@chakra-ui/react'
import btcImage from '../../../assets/btc-asset.png'
import usdImage from '../../../assets/usd-asset.png'
import graphImage from '../../../assets/graph.png'
import arrowUp from '../../../assets/arrow-up-asset.png'
import switchImage from '../../../assets/switch.png'
import assetUp from '../../../assets/asset-up.png'
import { useDispatch, useSelector } from 'react-redux'
import { selectShowGraph } from '../redux/wallet-selectors'
import { toggleAssetCard } from '../redux/wallet-slice'

function AssetCard() {
  const dispatch = useDispatch()
  const isGraph = useSelector(selectShowGraph)

  const handleClick = () => dispatch(toggleAssetCard())

  return (
    <Flex 
      minW="137px"
      w="137px"
      h="143px"
      border="1px solid #F5F5F5"
      borderRadius="8px"
      m={3}
      direction="column"
      justify="space-between"
      cursor="pointer"
      onClick={handleClick}
    >
      <Flex justify="space-between" align="center" p={2}>
        <Flex>
          <Image src={btcImage} alt="" />
          {isGraph && <Image src={usdImage} alt="" ml="-10px" />}
        </Flex>
        {isGraph && (
          <Box color="#0EBF7C" bg="#d3f3e7" borderRadius="10px" p="2px">
            <Text fontSize="10px" fontWeight={500}>+0.524%</Text>
          </Box>
        )}
      </Flex>

      <Box px={2}>
        {isGraph && (
          <Flex align="center">
            <Text fontSize="13px">BTC</Text>
            <Image src={switchImage} alt="" w="18px" h="18px" />
            <Text fontSize="13px">USD</Text>
          </Flex>
        )}
        <Text 
          color="#090931" 
          fontWeight="bold" 
          fontSize="15px"
          _after={{ content: `url(${isGraph ? arrowUp : ''})`, ml: 1 }}
        >
          $16,600.65
        </Text>
        {!isGraph && <Text color="gray" fontSize="13px">USDT</Text>}
      </Box>

      <Box>
        {isGraph
          ? <Image src={graphImage} alt="" />
          : (
            <Flex align="center" p={2}>
              <Image src={assetUp} alt="" mr={1} />
              <Text color="#0EBF7C" fontSize="13px" fontWeight={500}>-0.65%</Text>
            </Flex>
          )}
      </Box>
    </Flex>
  )
}

export default AssetCard