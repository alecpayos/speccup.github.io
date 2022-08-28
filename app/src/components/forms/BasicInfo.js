import { useState, useEffect } from 'react'
import { colors } from '../../components/globals'
import FormButton from './FormButtons'
import rules from './Rules'

import { 
  Col, 
  Row, 
  Typography, 
  Form, 
  DatePicker, 
  InputNumber, 
  Input, 
  Select 
} from 'antd'

const { Option } = Select
const { Title } = Typography

const BasicInformation = ({ onChange, render, memory, xxl, style }) => {
  useEffect(() => {
    setBasicInformation(memory)
  }, [memory])

  const [ form ] = Form.useForm()
  const [ basicInformation, setBasicInformation ] = useState({
    firstName: null,
    lastName: null,
    age: null,
    mobileNumber: null,
    birthdate: null,
    gender: null
  })
  
  const handleFirstName = (e) => setBasicInformation({ ...basicInformation, firstName: e.target.value })
  const handleLastName = (e) => setBasicInformation({ ...basicInformation, lastName: e.target.value })
  const handleAge = (e) => setBasicInformation({ ...basicInformation, age: e })
  const handleMobileNumber = (e) => setBasicInformation({ ...basicInformation, mobileNumber: e.target.value })
  const handleBirthdate = (date) => setBasicInformation({ ...basicInformation, birthdate: date })
  const handleSubmit = () => { onChange(basicInformation); render(1) }

  const GenderField = () => {
    const [ , setGenderValue ] = useState(null)
    const handleGenderValue = (genderValue) => {
      setGenderValue(genderValue)
      setBasicInformation({ ...basicInformation, gender: genderValue })
    }

    const genderValues = [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
      { value: "Rather not say", label: "Rather not say" },
      { value: "Lesbian", label: "Lesbian" },
      { value: "Gay", label: "Gay" },
      { value: "Bisexual", label: "Bisexual" },
      { value: "Transgender", label: "Transgender" },
      { value: "Gender Queer", label: "Gender Queer" },
      { value: "Alien", label: "Alien" },
      { value: "Other", label: "Other" }
    ]

    return (
      <Select
        allowClear
        showSearch
        onChange={handleGenderValue}
        size='large'
        value={basicInformation.gender}
        placeholder='Gender'
      >
        {genderValues.map((genders, index) => {
          return (
            <Option key={index} value={genders.value}>
              {genders.label}
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
          'First name': memory.firstName,
          'Last name': memory.lastName,
          'Age': memory.age,
          'Mobile number': memory.mobileNumber,
          'Birthdate': memory.birthdate
        }}
      >
        <Title style={{ color: colors.textColor.primary, padding: '32px 0 12px 0' }} level={3}>Basic Information</Title>
        <Row gutter={[16, 0]}>

          <Col span={24}>
            <Form.Item name='First name' rules={ rules.basicInformation[0] }>
              <Input onChange={handleFirstName} placeholder='First name' size='large' />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name='Last name' rules={ rules.basicInformation[1] }>
              <Input onChange={handleLastName} placeholder='Last name' size='large' />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name='Age' rules={ rules.basicInformation[2] }>
              <InputNumber onChange={handleAge} style={{ width: '100%' }} min={5} max={75} placeholder='Age' size='large' />
            </Form.Item>
          </Col>

          <Col span={16}>
            <Form.Item name='Mobile number' rules={ rules.basicInformation[3] }>
              <Input onChange={handleMobileNumber} size='large' placeholder='Mobile number' />    
            </Form.Item> 
          </Col>
          
          <Col span={12}>
            <Form.Item name='Birthdate' rules={ rules.basicInformation[4] }>
              <DatePicker 
                format='MM/DD/YYYY'
                onChange={handleBirthdate}
                picker='date' 
                style={{ width: '100%' }} 
                placeholder='Birthdate' 
                size='large' 
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name='Gender'>
              <GenderField />
            </Form.Item>
          </Col>

          <FormButton 
            name='Next' 
            span={4} 
            offset={20} 
            type='submit'
          />

        </Row>
      </Form>
    </Col>
  )
}

export default BasicInformation