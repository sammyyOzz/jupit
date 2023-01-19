import { Box, Flex, Image, Text } from "@chakra-ui/react"
import walletRoutes from "../routes"

function WalletSidebar() {
  return (
    <Box p="40px" h="calc(100vh - 100px)">
      {walletRoutes.map(({ name, icon }) => (
        <Flex key={name} align="center" mb={7}>
          <Image src={icon} alt="" h="30px" w="30px" mr={3} />
          <Text
            color="primary"
            fontWeight={600}
            fontSize="18px"
          >
            { name }
          </Text>
        </Flex>
      ))}
    </Box>
  )
}

export default WalletSidebar