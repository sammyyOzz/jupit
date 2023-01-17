import { Box, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react"
import logoWhite from "../../assets/logo-white.png"
import linkedin from "../../assets/linkedin.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"

function Footer() {
  return (
    <Box bg="#1C1D93" pt="50px" color="white">
      <Box w="90%" mx="auto">
        <SimpleGrid columns={[2, null, 5]} spacing='40px' fontSize="20px">
          <Box>
            <Text fontWeight="bold" mb={6}>
              Quick Links
            </Text>
            <Link mb={4}>
              <Text mb={4}>Company</Text>
            </Link>
            <Link mb={4}>
              <Text mb={4}>About Jupit</Text>
            </Link>
            <Link mb={4}>
              <Text mb={4}>Contact Us</Text>
            </Link>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={6}>
              Product
            </Text>
            <Link mb={4}>
              <Text mb={4}>Bitcoin</Text>
            </Link>
            <Link mb={4}>
              <Text mb={4}>USDT</Text>
            </Link>
            <Link mb={4}>
              <Text mb={4}>Gift Card</Text>
            </Link>
            <Link mb={4}>
              <Text mb={4}>OTC</Text>
            </Link>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={6}>
              Legal
            </Text>
            <Link mb={4}>
              <Text mb={4}>Terms of Service</Text>
            </Link>
            <Link mb={4}>
              <Text mb={4}>Privacy Policy</Text>
            </Link>
            <Link mb={4}>
              <Text mb={4}>Anti-money Laundering Policy</Text>
            </Link>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={6}>
              Resources
            </Text>
            <Link mb={4}>
              <Text mb={4}>Blog</Text>
            </Link>
            <Link mb={4}>
              <Text mb={4}>FAQ</Text>
            </Link>
          </Box>

          <Box>
            <Link mb={4}>
              <Text mb={4}>support@jupitapp.co</Text>
            </Link>
            <Link mb={4}>
              <Text mb={4}>+234 802 8651 917</Text>
            </Link>
          </Box>
        </SimpleGrid>

        <Flex 
          py="30px" 
          mt="30px" 
          justify="space-between" 
          align="center" 
          direction={["column", null, null, "row"]}
          borderTop="1px solid #817e7eac"
        >
          <Image src={logoWhite} alt="" h="30px" w="100px" />
          <Flex justify="space-between" py="20px">
            <Text px="30px">
              Quick Link
            </Text>
            <Text px="30px">
              Legal
            </Text>
            <Text px="30px">
              Product
            </Text>
            <Text px="30px">
              Resources
            </Text>
            <Text px="30px">
              FAQs
            </Text>
          </Flex>
          <Flex>
            <Image src={linkedin} alt="" mr={5} />
            <Image src={facebook} alt="" mr={5} />
            <Image src={instagram} alt="" />
          </Flex>
      </Flex>
      </Box>
    </Box>
  )
}

export default Footer