import Header from "../../components/header"
import SecondSection from "./second-section"
import ServicesSection from "./services-section"
import TopSection from "./top-section"
import TestimonialSection from "./testimonial-section"
import InstallAppSection from "./install-app-section"

function Home() {
  return (
    <>
      <Header />
      <TopSection />
      <SecondSection />
      <ServicesSection />
      <TestimonialSection />
      <InstallAppSection />
    </>
  )
}

export default Home