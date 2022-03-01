import { Carousel, Col, Row, Typography, Image } from "antd";
import speed from '../assets/feature-images/speed.png'
import squat from '../assets/feature-images/squat.png'
import trainer from '../assets/feature-images/flex.png'
import { colors, styles } from "./globals";

const { Paragraph } = Typography;
const featureImages = [ speed, trainer, squat ];
const featureDescriptions = [
    "SpeccUp offers a variety of workout plans that are best fitted to your body. Workout plans may vary in intensity and we suggest 3 categories: Light, Moderate, and Intense. Your information will be essential in generating the perfect workout plan.",
    "SpeccUp generates workout plans in consideration of our users\' current conditions. We also visualize ourselves as a platform that caters to the to all types of users, especially those who are categorized as malnoruished or disabled.",
    "Famous artists chose our app in picking out the best exercises for their workout needs. We deliver results like no other through effectiveness and accuracy. Join our routine by signing up as we give out early-bird discounts!"
];

const Features = () => {
    return (
        <Row justify="center" style={{ height: '864px', marginBottom: '96px' }}>
            <Col span={24}>
                <p style={{ ...styles.homeHeader, margin: '96px 0 0 0' }}>Features</p>
            </Col>
            <Col span={18} style={{ justifyContent: 'center', alignItems: 'center', height: '558px', backgroundImage: 'linear-gradient(to bottom, white 30%, #FFBF00 30% 90%, white 90%)' }}>
                <Carousel autoplay>
                    <Col>
                        <Col offset={1}>
                            <img style={{ marginTop: '32px' }} src={featureImages[0]} />
                        </Col>
                        <Col span={10} offset={11} style={{ position: 'absolute', top: '272px', color: 'white', font: "20px 'Roboto Mono', monospace" }}>
                            {featureDescriptions[0]}
                        </Col>
                    </Col>
                    <Col>
                        <Col span={10} offset={4}>
                            <img style={{ position: 'absolute', zIndex: '6' }} src={featureImages[1]} />
                        </Col>
                        <Col span={12} offset={9} style={{ marginTop: '272px', color: 'white', font: "20px 'Roboto Mono', monospace" }}>
                            {featureDescriptions[1]}
                        </Col>
                    </Col>
                    <Col>
                        <Col offset={9}>
                            <img style={{ position: 'absolute', zIndex: '7', marginTop: '112px' }} src={featureImages[2]} />
                        </Col>
                        <Col span={10} offset={4} style={{ marginTop: '272px', color: 'white', font: "20px 'Roboto Mono', monospace" }}>
                            {featureDescriptions[2]}
                        </Col>
                    </Col>
                </Carousel>
            </Col>
        </Row>
    );
};

export default Features;