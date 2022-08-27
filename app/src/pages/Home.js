import { Col, Row } from "antd"
import Advantages from "../components/Advantages"
import Contact from "../components/Contact"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Offers from "../components/Offers"


const Home = () => {
  return (
    <Row>
      {[
        <Hero />, 
        <Features />, 
        <Offers />, 
        <Advantages />,
        <Contact />
      ]
      .map((component, index) => (
        <Col key={index} span={24}>{component}</Col>
      ))}
    </Row>
  )
}

export default Home