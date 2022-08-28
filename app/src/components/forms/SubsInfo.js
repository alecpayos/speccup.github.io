import { useState, useMemo, useEffect } from 'react'
import { colors } from '../../components/globals'
import countryList from 'react-select-country-list'
import { State, City } from 'country-state-city'
import FormButton from './FormButtons'
import rules from './Rules'

import { 
  Col, 
  Row, 
  Typography, 
  Form, 
  DatePicker, 
  Input, 
  Select 
} from 'antd'

const { Option } = Select
const { Title } = Typography

const SubscriptionInformation = ({ onChange, render, memory, xxl, style }) => {
  useEffect(() => {
      setSubscriptionInfo(memory)
  }, [memory])

  const countryOptions = useMemo(() => countryList().getData(), [])
  const [ form ] = Form.useForm()
  const [ subscriptionInfo, setSubscriptionInfo ] = useState({
    cardHolder: null,
    cardNumber: null,
    cardExpiry: null,
    cardCode: null,
    zipCode: null,
    street: null,
  })

  const handleCardHolder = e => setSubscriptionInfo({ ...subscriptionInfo, cardHolder: e.target.value})
  const handleCardNumber = e => setSubscriptionInfo({ ...subscriptionInfo, cardNumber: e.target.value})
  const handleCardExpiry = date => setSubscriptionInfo({ ...subscriptionInfo, cardExpiry: date })
  const handleCardCode = e => setSubscriptionInfo({ ...subscriptionInfo, cardCode: e.target.value})
  const handleZipCode = e => setSubscriptionInfo({ ...subscriptionInfo, zipCode: e.target.value })
  const handleStreet = e => setSubscriptionInfo({ ...subscriptionInfo, street: e.target.value })
  const handleBack = () => render(1)
  const handleSubmit = () => { onChange(subscriptionInfo); window.location('/register') }
  const addressValues = { country: '', state: '' }

  const [ address, setAddress ] = useState({
    'country': null,
    stateList: null,
    'state': null,
    cityList: null,
    'city': null
  })

  const AddressSelector = ({ component, componentValue,  cscList, placeholder }) => {
    const handleCountry = (e) => {
      setAddress({ 
        ...address,  
        [componentValue]: e, 
        state: null,
        city: null,
        stateList: State.getStatesOfCountry(e)
      })
    }

    const handleState = (e) => {
      setAddress({
        ...address,
        [componentValue]: e,
        cityList: City.getCitiesOfState(address.country, address.state)
      })
    }

    const handleCity = (e) => {
      setAddress({
        ...address,
        [componentValue]: e
      })
    }

    return (
      <Select
        allowClear
        showSearch
        size='large'
        value={[component]}
        optionFilterProp="children"
        placeholder={placeholder}
        filterOption={
          (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        onChange={(
          placeholder === "Country" ? handleCountry : null || 
          placeholder === "State" ? handleState : null ||
          placeholder === "City" ? handleCity : null
        )}
      >
        {cscList && cscList.map((options, index) => {
          const handleComponentValue = {
            value() {
              switch(placeholder) {
                case "Country":
                  addressValues.country = options.label
                  return options.value
                case "State":
                  addressValues.state = options.name
                  return options.isoCode
                case "City":
                  return options.name
                default:
                  return null
              }
            },
            label() {
              switch(placeholder) {
                case "Country":
                  return options.label
                case "State":
                  return options.name
                case "City":
                  return options.name
                default:
                  return null
              }
            }
          }

          return (
            <Option key={index} value={handleComponentValue.value()}>
              {handleComponentValue.label()}
            </Option>
          )
        })}
      </Select>
    )
  }

  return (
    <Col
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 20, offset: 2 }}
      md={{ span: 16, offset: 4 }}
      lg={{ span: 12, offset: 6 }}
      xl={{ span: 8, offset: 8 }}
      xxl={xxl}
      style={style}
    >
      <Form 
        form={form} 
        onFinish={handleSubmit}
        initialValues={{
          'Name on card': memory.cardHolder,
          'Card number': memory.cardNumber,
          'Expiry': memory.cardExpiry,
          'CVC': memory.cardCode
        }}
      >

        <Title level={3} style={{ color: colors.textColor.primary, paddingTop: 24 }}>
          Subscription Information
        </Title>

        <Row gutter={[16, 0]}>
            
          <Col span={24}>
            <Title level={5} style={{ color: '#444' }}>
              PAYMENT DETAILS
            </Title>
          </Col>

          <Col span={24}>
            <Form.Item name='Name on card' rules={ rules.subscriptionInformation[0] }>
              <Input onChange={handleCardHolder} size='large' placeholder='Name on card' />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name='Card number' rules={ rules.subscriptionInformation[1] }>
                <Input onChange={handleCardNumber} size='large' placeholder='Card number' />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item name='Expiry' rules={ rules.subscriptionInformation[2] }>
              <DatePicker 
                onChange={handleCardExpiry}
                format='MM/DD'
                picker='date' 
                style={{ width: '100%' }} 
                placeholder='Expiry' 
                size='large' 
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item name='CVC' rules={ rules.subscriptionInformation[3] }>
              <Input onChange={handleCardCode} size='large' placeholder='CVC' />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Title level={5} style={{ color: '#444' }}>
              BILLING ADDRESS
            </Title>
          </Col>

          <Col span={12}>
            <Form.Item name='Country'>
              <AddressSelector component={address.country} componentValue={'country'} cscList={countryOptions} placeholder="Country" />
            </Form.Item> 
          </Col>

          <Col span={12}>
            <Form.Item name='State'>
              <AddressSelector component={address.state} componentValue={'state'} cscList={address.stateList} placeholder="State" />
            </Form.Item> 
          </Col>

          <Col span={12}>
            <Form.Item name='City'>
              <AddressSelector component={address.city} componentValue={'city'} cscList={address.cityList} placeholder="City" />
            </Form.Item> 
          </Col>

          <Col span={12}>
            <Form.Item name='Zip code'>
              <Input onChange={handleZipCode} size='large' placeholder='Zip code' />    
            </Form.Item> 
          </Col>

          <Col span={24}>
            <Form.Item name='Street'>
              <Input onChange={handleStreet} size='large' placeholder='Street' />    
            </Form.Item> 
          </Col>

          <FormButton 
            name='Back' 
            span={4} 
            offset={16} 
            type='button'
            handler={handleBack}
          />

          <FormButton 
            name='Next' 
            span={4} 
            type='submit'
          />
        </Row>
      </Form>
    </Col>
  )
}

export default SubscriptionInformation