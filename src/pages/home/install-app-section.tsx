import { Box, Button, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import phoneImage from "../../assets/phone-2.png"
import InstallCard from "../../components/install-card"
import rectangleImage from "../../assets/rectangle-with-waves.png"
import btcImage from "../../assets/btc.png"
import ethImage from "../../assets/eth.png"
import nairaImage from "../../assets/naira.png"

function InstallAppSection() {
  return (
    <Box pb="100px">
      <Box w="90%" mx="auto">
        <Image src={phoneImage} alt="" mx="auto" />
        <Heading as="h2" fontSize="60px" color="#090931" textAlign="center" maxW={['90%', null, '65%']} mx="auto">
          Install the App Today
        </Heading>
        <Text textAlign="center" color="#777777" fontSize="20px" maxW={['90%', null, '70%']} mx="auto" my="50px">
          The Progressive Web App works just like your regular App, it’s super easy and convenient. To instal, please follow the process below.
        </Text>
        <SimpleGrid columns={[1, null, 2]} spacing='70px' w={['90%', null, '70%']} mx="auto">
          <InstallCard>
            Launch <span style={{ fontWeight: 600 }}>www.jupitapp.com/signin</span> from your mobile device or tablet.
          </InstallCard>
          <InstallCard>
            Select Add Page to Home Screen
          </InstallCard>
          <InstallCard>
            Navigate to the browser option on your android device or tap the share button on your IOS device.
          </InstallCard>
          <InstallCard>
            Return to home menu to launch the application shortcut.
          </InstallCard>
        </SimpleGrid>

        <Box 
          py="60px" 
          mt="100px"
          bgImage={`url(${rectangleImage})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          borderRadius="10px"
          textAlign="center"
          position="relative"
        >
          <Image 
            src={btcImage} 
            alt="" 
            position="absolute"
            w="150px"
            h="150px"
            top="0"
            mt="-75px"
            right="100"
          />
          <Image 
            src={nairaImage} 
            alt="" 
            position="absolute"
            w="120px"
            h="120px"
            top="30px"
            right="-60px"
          />
          <Image 
            src={ethImage} 
            alt="" 
            position="absolute"
            w="120px"
            h="120px"
            bottom="0"
            mb="-60px"
            left="30px"
          />

          <Text color="white" maxW="55%" m="auto" fontWeight="600" fontSize="32px" mb={10}>
            Join our 3,620 and counting user today and start transacting seamlessly
          </Text>
          <Button 
            color="primary" 
            bg="#F4A039"
            borderRadius="0"
            m="auto"
            p="25px 40px"
          >
            Get started
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default InstallAppSection