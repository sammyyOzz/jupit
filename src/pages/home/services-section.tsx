import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import ServicesCard from "../../components/services-card"
import servicesIcon1 from "../../assets/services-icon-1.png"
import servicesIcon2 from "../../assets/services-icon-2.png"
import servicesIcon3 from "../../assets/services-icon-3.png"
import servicesIcon4 from "../../assets/services-icon-4.png"

function ServicesSection() {
  return (
    <Box py="100px">
      <Box w="90%" mx="auto">
        <Heading as="h2" fontSize="60px" color="#090931" textAlign="center" maxW={['90%', null, '65%']} mx="auto">
          Best services that works for you
        </Heading>
        <Text textAlign="center" color="#777777" fontSize="20px" maxW={['90%', null, '70%']} mx="auto" my="50px">
          We provide a wide range of services to our users. Take a look at few of the solutions to expect from us.
        </Text>
      
        <SimpleGrid columns={[1, null, 2]} spacing='70px' w={['90%', null, '70%']} mx="auto">
          <ServicesCard
            title="Fast Transaction"
            text="Fast and easy-to-use trading services in one integrated platform."
            icon={servicesIcon1}
          />
          <ServicesCard
            title="Secure Wallet"
            text="You can rest easy knowing that your asset is safe with us anytime."
            icon={servicesIcon2}
          />
          <ServicesCard
            title="Built for You"
            text="We want anyone & everyone in need for cryptocurrency gets prompt and clear access to their transactions."
            icon={servicesIcon3}
          />
          <ServicesCard
            title="Customer First"
            text="We pride ourselves on providing excellent customer service."
            icon={servicesIcon4}
          />
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default ServicesSection