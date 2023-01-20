import Nav from "../../components/nav"
import SecondSection from "./second-section"
import ServicesSection from "./services-section"
import TopSection from "./top-section"
import TestimonialSection from "./testimonial-section"
import InstallAppSection from "./install-app-section"
import Footer from "../../components/footer"
import { Box } from "@chakra-ui/react"

function Landing() {
  return (
    <Box overflowX="hidden">
      <Nav />
      <TopSection />
      <SecondSection />
      <ServicesSection />
      <TestimonialSection />
      <InstallAppSection />
      <Footer />
    </Box>
  )
}

export default Landing