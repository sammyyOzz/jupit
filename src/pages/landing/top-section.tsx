import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import manOnLandingPage from '../../assets/man-landing-page.png'
import CardOne from "../../components/card-one"
import coinImage from "../../assets/coin.png"
import faceImage from "../../assets/face.png"
import exchangeImage from "../../assets/exchange.png"

function TopSection() {
  return (
    <>
      <Flex minH="calc(100vh - 100px)" py="50px">
        <Flex direction={['column', null, null, 'row']} w="90%" m="auto" justify={[null, null, null, 'space-between']}>
          <Box w={['100%', null, null, 'calc(50% - 10px)']} py="30px">
            <Heading as="h1" fontSize={["35px", null, "50px"]} color="black" lineHeight={["40px", null, "70px"]}>
              Make easy digital assets transactions anywhere, anytime with Jupit.
            </Heading>
            <Text my="8" color="#040415" fontSize="20px" fontWeight={500}>
              A place for everyone who wants to simply buy and sell digital assets, it just takes 120 seconds!
            </Text>
            <Button color="#1C1C93" bg="secondary" p="30px 40px">
              Get Started
            </Button>
          </Box>
          <Box
            w={['100%', null, null, 'calc(50% - 10px)']}
            minH={["600px", null, null, "100%"]}
            bgImage={`url(${manOnLandingPage})`}
            bgPosition="right"
            bgRepeat="no-repeat"
            position="relative"
          >
            <Image 
              src={exchangeImage} 
              alt="" 
              position="absolute"
              top="100px"
              left="0"
            />
            <CardOne 
              image={coinImage} 
              text="Transaction Successful!"
              right="0" 
              bottom="120px"
            />
            <CardOne 
              image={faceImage} 
              text="Paul just sent you 500 usdt"
              bottom="10px"
              left="calc(50% - 100px)"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default TopSection