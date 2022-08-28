import { Col } from "antd"
import Contact from "../components/Contact"
import promoBackground from '../assets/feature-images/promos background.jpg'
import BasicInformation from "../components/forms/BasicInfo"
import AccountInformation from "../components/forms/AccountInfo"
import SubscriptionInformation from "../components/forms/SubsInfo"
import { useState } from "react"

const Promos = () => {
  const [ formSelector, setFormSelector ] = useState(0)
  const [ userBasicInfo, setUserBasicInfo ] = useState({})
  const [ userAccountInfo, setUserAccountInfo ] = useState({})
  const [ userSubscriptionInfo, setUserSubscriptionInfo ] = useState({})

  const formRenderer = id => setFormSelector(id)
  const handleBasicData = basicInfo => setUserBasicInfo(basicInfo)
  const handleAccountData = accountInfo => setUserAccountInfo(accountInfo)
  const handleSubscriptionData = subscriptionInfo => setUserSubscriptionInfo(subscriptionInfo)

  const Forms = () => {
    switch(formSelector) {
      case 0:
        return (
          <BasicInformation 
            onChange={handleBasicData} 
            render={formRenderer} 
            memory={userBasicInfo} 
            xxl={{ span: 14, offset: 5 }}
            style={{ backgroundColor: 'white', padding: '8px 48px', borderRadius: '16px' }}
          />
        )
      case 1:
        return (
          <AccountInformation 
            onChange={handleAccountData} 
            render={formRenderer} 
            memory={userAccountInfo}
            xxl={{ span: 14, offset: 5 }}
            style={{ backgroundColor: 'white', padding: '8px 48px', borderRadius: '16px' }}
          />        
        )
      case 2:
        return (
          <SubscriptionInformation 
            onChange={handleSubscriptionData} 
            render={formRenderer} 
            memory={userSubscriptionInfo}
            xxl={{ span: 14, offset: 5 }}
            style={{ backgroundColor: 'white', padding: '8px 48px', borderRadius: '16px' }}
          />
        )
      default:
        return null
    }
  }

  return(
    <>
      <Col style={{ display: 'flex', height: '100vh', marginBottom: '48px' }}>
        <Col>
          <img 
            src={promoBackground} 
            alt="promotions page background" 
            style={{
              position: 'absolute',
              left: '-24px',
              top: '-24px',
              filter: 'blur(12px)',
              width: 'calc(100vw - 17px + 24px)',
              height: 'calc(100vh + 48px)',
              objectFit: 'cover'
            }}
          />
        </Col>

        <Col span={10} offset={2} style={{ width: 'calc(100vw - 17px)', justifyContent: 'center', alignSelf: 'center' }}>
          <p style={{ textAlign: 'center', color: 'white' }}>

            <strong style={{ font: "bold 64px 'Arial', sans-serif" }}>
              Chinese New Year Sale!<br />
              Memberships are now<br />
            </strong>

            <strong style={{ font: "96px 'Arial Black', sans-serif", color: '#FAAD14', lineHeight: '96px', paddingBottom: '64px' }}>
              50% OFF
            </strong><br /><br /><br />
            Terms and conditions apply<br />
            Subscription plans under promotions are non-refundable
            
          </p>
        </Col>

        <Col span={10} style={{ justifyContent: 'center', alignSelf: 'center' }}>
          <Forms />
        </Col>

      </Col>
      <Contact />
    </>
  )
}

export default Promos