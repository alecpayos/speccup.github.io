import { useState } from 'react'
import { Col, Row, Steps, } from 'antd'
import BasicInformation from '../components/forms/BasicInfo'
import AccountInformation from '../components/forms/AccountInfo'
import SubscriptionInformation from '../components/forms/SubsInfo'
import Offers from '../components/Offers'
import Contact from '../components/Contact'

import { 
  RightCircleOutlined, 
  UserOutlined, 
  CreditCardOutlined
} from '@ant-design/icons'

const Registration = ({ options }) => {
  const { Step } = Steps
  const [ formSelector, setFormSelector ] = useState(0)
  const [ userBasicInfo, setUserBasicInfo ] = useState({})
  const [ userAccountInfo, setUserAccountInfo ] = useState({})
  const [ userSubscriptionInfo, setUserSubscriptionInfo ] = useState({})

  const formRenderer = id => setFormSelector(id)
  const handleBasicData = basicInfo => setUserBasicInfo(basicInfo)
  const handleAccountData = accountInfo => setUserAccountInfo(accountInfo)
  const handleSubscriptionData = subscriptionInfo => setUserSubscriptionInfo(subscriptionInfo)

  const componentHeight = () => {
    switch(formSelector) {
      case 0:
        return '6.5in'
      case 1:
        return '6.5in'
      case 2:
        return '7.5in'
      default:
        return null
    }
  }

  const Forms = () => {
    switch(formSelector) {
      case 0:
        return (
          <BasicInformation 
            onChange={handleBasicData} 
            render={formRenderer} 
            memory={userBasicInfo} 
            xxl={{ span: 6, offset: 9 }}
          />
        )
      case 1:
        return (
          <AccountInformation 
            onChange={handleAccountData} 
            render={formRenderer} 
            memory={userAccountInfo}
            xxl={{ span: 6, offset: 9 }}
          />        
        )
      case 2:
        return (
          <SubscriptionInformation 
            onChange={handleSubscriptionData} 
            render={formRenderer} 
            memory={userSubscriptionInfo}
            xxl={{ span: 6, offset: 9 }}
          />
        )
      default:
        return null
    }
  }

  const StepsRenderer = ({ current }) => {
    const stepValues = {
      value: [
        "Basic Information",
        "Account Information",
        "Subscription Information"
      ],
      handleStepIcon: [
        <RightCircleOutlined />,
        <UserOutlined />,
        <CreditCardOutlined />
      ]
    }
    
    return (
      <Steps current={current}>
        {stepValues.value.map((value, index) => (
          <Step 
            key={index} 
            title={value} 
            icon={stepValues.handleStepIcon[index]} 
          />
        ))}
      </Steps>
    )
  }

  return (
    <div style={{ paddingTop: '64px', minHeight: componentHeight() }}>
      <Row
        style={{ 
          height: '1.7in', 
          alignContent: 'center', 
          paddingTop: '1in',
          display: options
        }}
      >
        <Col 
          xs={{ span: 0 }}
          lg={{ span: 18, offset: 3 }}
          xl={{ span: 16, offset: 4 }}
          xxl={{ span: 12, offset: 6 }}>
            <StepsRenderer current={formSelector} />
        </Col>    
      </Row> 

      <Row style={{ minHeight: '584px' }}>
        <Forms />
      </Row>

      <Offers />
      <Contact />
    </div>
  )
}

export default Registration