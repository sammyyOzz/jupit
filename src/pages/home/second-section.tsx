import { Box, SimpleGrid } from '@chakra-ui/react'
import CardTwo from '../../components/card-two'

function SecondSection() {
  return (
    <Box py="80px" bg="#F5F5F5">
      <SimpleGrid
        minChildWidth="250px" 
        spacing="20px"
        w="90%"
        m="0 auto"
      >
        <CardTwo 
          title="Fast Transaction"
          text="Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform"
        />
        <CardTwo 
          title="Secure Wallet"
          text="Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform"
        />
        <CardTwo 
          title="Build For You"
          text="Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform"
        />
        <CardTwo 
          title="Customer First"
          text="Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform"
          blueBg
        />
      </SimpleGrid>
    </Box>
  )
}

export default SecondSection