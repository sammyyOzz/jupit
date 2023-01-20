import { Box, Flex, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import { Auth } from '../../features/auth'
import { appRoutes } from '../../routes'
import Sidebar from './sidebar'

function Layout() {
  return (
    <Box>
      <Flex h="100px" w="90%" justify="space-between" align="center" m="auto">
        <Image src={logo} alt="" h="50px" w="160px" />
        <Flex justify="space-between" display={['none', null, null, null, 'flex']}>
          {appRoutes.map(({ name }, index) => (
            <Text key={index} color="#3D3D3D" fontSize="16px" fontFamily="Nexa" px="30px">
              { name }
            </Text>
          ))}
        </Flex>
        <Box display={['none', null, null, null, 'block']}>
          <Auth />
        </Box>
        <Sidebar />
      </Flex>
    </Box>
  )
}

export default Layout