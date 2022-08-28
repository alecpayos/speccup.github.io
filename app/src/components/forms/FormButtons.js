import { colors } from '../../components/globals'
import { Col, Form, Button } from 'antd'

const FormButton = ({ name, span, offset, type, handler }) => {
  const buttonStyles = {
    next: { 
      color: colors.textColor.support,
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
    },
    back: {
      borderColor: colors.secondary,
      color: colors.textColor.secondary
    }
  }

  return (
    <Col 
      span={span}
      offset={offset}
      style={{ 
        display: 'flex', 
        justifyContent: 'right'
      }}
    >
      <Form.Item>
        <Button 
          htmlType={type} 
          onClick={handler}
          size='large'
          style={
            name === "Next"
            ? buttonStyles.next
            : buttonStyles.back
          }
        >
          {name}
        </Button>
      </Form.Item>
    </Col>
  )
}

export default FormButton