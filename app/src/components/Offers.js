import { Col, Row } from "antd";
import { styles } from "./globals";
import { FaDumbbell, FaWallet, FaWalking } from 'react-icons/fa';
import { IconContext } from "react-icons";

const offerContent = {
  cardMedia: [
    <FaDumbbell />,
    <FaWallet />,
    <FaWalking />
  ],
  cardHeader: [
    "Pro",
    "Standard",
    "Basic"
  ],
  cardPrice: [
    '$99',
    '$49',
    '$0'
  ],
  cardHeaderSupport: [
    "per year",
    "per year",
    "forever"
  ],
  content: [
    [
      "Daily workouts",
      "In-depth analytics",
      "Chat and community support",
      "Video library access",
      "All of standard plan",
      "Onboarding with a trainer",
    ],
    [
      "Daily workouts",
      "Analytics",
      "Chat and community support",
      "Video library access",
      "All of basics plan",
      "Onboarding",
    ],
    [
      "Weekly workouts",
      "Basic analytics",
      "Community support",
      "Limited videos",
      "No trainer",
      "Free forever",
    ]
  ]
}

const Offers = () => {
  return (
    <Row style={{ backgroundColor: '#F8F9FA', paddingBottom: '64px', justifyContent: 'center' }}>
      <Col span={24}>
        <p style={styles.homeHeader}>Exclusive Offers</p>
      </Col>
      <Col span={18}>
        <Row gutter={[32, 32]} justify="center">
          {offerContent.cardHeader.map((offer, index) => (
            <Col 
              key={index}
              xs={{ span: 24 }}
              sm={{ span: 20 }}
              md={{ span: 16 }}
              lg={{ span: 12 }}
              xl={{ span: 8 }}
              xxl={{ span: 7 }}
            >

              <div style={styles.offerContent.cardHeader(index)}>
                <IconContext.Provider value={{ style:{ width: '55px', height: '44px', color: '#333333' } }}>
                  <div>{offerContent.cardMedia[index]}</div>
                </IconContext.Provider>

                <p style={styles.offerContent.packageName}>{offer}</p>
                <p style={styles.offerContent.packagePrice}>{offerContent.cardPrice[index]}</p>
                <p style={styles.offerContent.packageDuration}>{offerContent.cardHeaderSupport[index]}</p>
              </div>

              <div style={styles.offerContent.cardBody}>
                {offerContent.content[index].map((inclusions, index) => (
                  <p key={index}>{inclusions}</p>
                ))}
              </div>

            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Offers;