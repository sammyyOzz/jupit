import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import TestimonialCard from '../../components/testimonial-card'

function TestimonialSection() {
  return (
    <Box py="100px" bg="#1C1D93">
      <Box w="80%" mx="auto">
        <Heading as="h2" fontSize="30px" color="white" textAlign="center" maxW={['90%', null, '40%']} mx="auto">
          See what our users' say about us
        </Heading>
        <Text textAlign="center" color="#bdbbbb" fontSize="15px" maxW={['90%', null, '50%']} mx="auto" my="50px">
          These testimonies and much more; join us so we can hear your testimonies too
        </Text>
        <SimpleGrid columns={[1, null, 2]} spacing='10px' w={['90%', null, '90%']} mx="auto">
          <TestimonialCard
            name="Femi Jupit"
            title="All your crypto in one place"
            text="We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress."
          />
          <TestimonialCard
            name="Eli Jupit"
            title="All your crypto in one place"
            text="We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress."
          />
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default TestimonialSection