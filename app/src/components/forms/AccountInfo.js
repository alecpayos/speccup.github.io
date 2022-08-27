import { useState, useEffect } from 'react'
import { colors } from '../../components/globals'
import FormButton from './FormButtons'
import rules from './Rules'

import { 
  Col, 
  Row, 
  Typography, 
  Form, 
  Input, 
} from 'antd'

const { Title } = Typography

const AccountInformation = ({ onChange, render, memory }) => { 
  useEffect(() => {
    setAccountInformation(memory)
  }, [])

  const [ form ] = Form.useForm()
  const [ accountInformation, setAccountInformation ] = useState({
    userName: null,
    emailAddress: null,
    password: null
  })
  
  const handleUsername = e => setAccountInformation({ ...accountInformation, userName: e.target.value })
  const handleEmail = e => setAccountInformation({ ...accountInformation, emailAddress: e.target.value })
  const handlePassword = e => setAccountInformation({ ...accountInformation, password: e.target.value })
  const handleBack = () => render(0)
  const handleSubmit = () => { onChange(accountInformation); render(2) }

  return (
    <Col
      xs={{ span: 20, offset: 2 }}
      sm={{ span: 16, offset: 4 }}
      md={{ span: 12, offset: 6 }}
      lg={{ span: 10, offset: 7 }}
      xl={{ span: 8, offset: 8 }}
      xxl={{ span: 6, offset: 9 }}
    >
      <Form 
        form={form} 
        onFinish={handleSubmit} scrollToFirstError
        initialValues={{
          'Username': memory.userName,
          'Email address': memory.emailAddress,
          'Password': memory.password
        }}
      >
        <Title style={{ color: colors.textColor.primary, padding: '32px 0 12px 0' }} level={3}>Account Information</Title>
        <Row gutter={[16, 0]}>

          <Col span={24}>
            <Form.Item name='Username' rules={ rules.accountInformation[0] }>
              <Input onChange={handleUsername} placeholder='Username' size='large' />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name='Email address' rules={ rules.accountInformation[1] }>
              <Input onChange={handleEmail} placeholder='Email address' size='large' />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name='Password' rules={ rules.accountInformation[2] }>
              <Input.Password onChange={handlePassword} placeholder='Password' size='large' />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item 
              name="Confirm password" 
              dependencies={['Password']} 
              rules={ rules.confirmPassword(accountInformation.password) }>
              <Input.Password placeholder='Confirm password' size='large' />
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

export default AccountInformation