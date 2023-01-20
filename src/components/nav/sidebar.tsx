import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Box,
} from '@chakra-ui/react'
import { Auth } from '../../features/auth'
import { appRoutes } from '../../routes'

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<any>()

  return (
    <>
      <Box 
        w="30px" 
        ref={btnRef} 
        onClick={onOpen} 
        cursor="pointer" 
        display={['block', null, null, null, 'none']}
      >
        <Box h="3px" bg="#313030" mb={1} />
        <Box h="3px" bg="#313030" mb={1} />
        <Box h="3px" bg="#313030" mb={1} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody pt="100px">
            {appRoutes.map(({ name }) => (
              <Text key={name} color="#3D3D3D" fontSize="16px" fontFamily="Nexa" mb={5}>
                {name}
              </Text>
            ))}
            <Auth />
          </DrawerBody>
          
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar