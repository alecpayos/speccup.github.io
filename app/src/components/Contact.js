import { Col, Row, Input, Form, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { colors, styles } from "./globals";

const Contact = () => {
    const [ form ] = Form.useForm();
    const contactContent = {
        labels: [
            'Your Name',
            'Email Address',
            'Phone Number',
        ],
        names: [
            'name',
            'email',
            'phone',
        ]
    }

    return (
        <Row justify="center" style={{ marginBottom: '64px' }}>
            <Col span={24}>
                <Row justify="center">
                    <Col span={24}>
                        <p style={{ ...styles.homeHeader, marginBottom: '24px' }}>Get in touch!</p>
                    </Col>
                    <Col span={24}>
                        <p style={{ color: '#333333', font: "20px 'Roboto', sans-serif", textAlign: 'center' }}>Contact us for a quote, help, or to join the team.</p>
                    </Col>
                </Row>
            </Col>
            <Col
                xs={{ span: 20 }}
                sm={{ span: 18 }}
                md={{ span: 16 }}
                lg={{ span: 14 }}
                xl={{ span: 12 }}
                xxl={{ span: 8 }}
            >
                <Form form={form} layout="vertical">
                    <Row gutter={[32, 0]}>

                        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                            {contactContent.labels.map((label, index) => (
                                <Form.Item
                                    key={index}
                                    name={contactContent.names[index]}
                                    label={label}
                                    rules={[{
                                        required: true,
                                        message: `Your ${contactContent.names[index]} is requried`
                                    }]}
                                    style={{ 
                                        font: "20px 'Roboto', sans-serif" 
                                    }}
                                >
                                    <Input size="large" />
                                </Form.Item>
                            ))}
                        </Col>

                        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                            <Form.Item 
                                style={{ 
                                    font: "20px 'Roboto', sans-serif", 
                                    width: '100%' 
                                }} 
                                label='Message' 
                                name='message'
                                rules={[{
                                    required: true,
                                    message: 'Please send us any feedback'
                                }]}
                            >
                                <TextArea style={{ height: '245px', resize: 'none' }} size="large" />
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row
                        style={{
                            justifyContent: 'center',
                            marginTop: '16px'
                        }}
                    >
                        <Form.Item>
                            <button
                                className='send-message'
                                style={{ 
                                    padding: '12px 32px', 
                                    borderRadius: '5px', 
                                    font: "bold 18px 'Roboto', sans-serif", 
                                    color: colors.textColor.secondary, 
                                    backgroundColor: colors.textColor.support,
                                    border: '2px solid #FFBF00'
                                }}
                            >
                                Send Message
                            </button>
                        </Form.Item>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
};

export default Contact;