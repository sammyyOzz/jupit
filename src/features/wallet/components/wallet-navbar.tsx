import { Flex, Image, Text } from '@chakra-ui/react'
import walletRoutes from '../routes'
import swapIcon from '../../../assets/wallet-arrows.png'

function WalletNavbar() {
  return (
    <Flex 
      display={['flex', null, 'none']}
      w="100%"
      position="fixed"
      bottom="0px"
      px="15px"
      py="20px"
      color="primary"
      fontSize="12px"
      fontWeight="600"
      justify="space-between"
      bg="white"
    >
      <Flex 
        h="64px" 
        w="64px" 
        bg="primary" 
        borderRadius="50%" 
        align="center" 
        justify="center"
        position="fixed"
        bottom="50px"
        left="calc(50% - 32px)"
      >
        <Image src={swapIcon} alt="" h="35px" w="35px" />
      </Flex>
      <Flex w="35%" justify="space-between">
        <Flex direction="column" align="center" m={1}>
          <Image src={walletRoutes[0].icon} alt="" />
          <Text>{walletRoutes[0].name}</Text>
        </Flex>
        <Flex direction="column" align="center" m={1}>
          <Image src={walletRoutes[1].icon} alt="" />
          <Text>{walletRoutes[1].name}</Text>
        </Flex>
      </Flex>

      <Flex w="35%" justify="space-between">
        <Flex direction="column" align="center" m={1}>
          <Image src={walletRoutes[2].icon} alt="" />
          <Text>{walletRoutes[2].name}</Text>
        </Flex>
        <Flex direction="column" align="center" m={1}>
          <Image src={walletRoutes[3].icon} alt="" />
          <Text>{walletRoutes[3].name}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default WalletNavbar