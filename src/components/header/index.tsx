import { Box, Flex, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import { appRoutes } from '../../routes'
import Button from '../button'

function Layout() {
  return (
    <Box>
      <Flex h="100px" w="90%" justify="space-between" align="center" m="auto">
        <Image src={logo} alt="" h="50px" w="160px" />
        <Flex justify="space-between">
          {appRoutes.map(({ name, to }, index) => (
            <Text key={index} color="#3D3D3D" fontSize="16px" fontFamily="Nexa" px="30px">
              { name }
            </Text>
          ))}
        </Flex>
        <Box>
          <Button outlined color="primary">Sign In</Button>
          <Button outlined bg="secondary" color="primary">Register</Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default Layout