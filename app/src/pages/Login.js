import { Col, Row, Form, Input, Checkbox, Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import ForgotPassword from "../components/ForgotPassword";
import { colors } from "../components/globals";
import '../styles/targetStyles.css';

const Login = () => {
    const [ form ] = Form.useForm();
    const [ modalVisibility, setModalVisibility ] = useState(false);
    const handleModalVisibility = () => setModalVisibility(true);
    const handleCancel = () => setModalVisibility(false);

    return (
        <Row 
            style={{ 
                justifyContent: 'center',
                minHeight: '5.5in',
                height: 'calc(100vh - 2.31in)',
                paddingTop: '1in'
            }}
        >
            <Col 
                xs={{ span: 16 }}
                sm={{ span: 12 }}
                md={{ span: 10 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
                xxl={{ span: 4 }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Form 
                    form={form} 
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        width: '100%' 
                    }}
                >
                    
                    <Col 
                        style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center' 
                        }}
                    >
                        <img 
                            src={logo}
                            style={{ 
                                height: '64px',
                                width: '64px',
                                margin: '24px 0 8px 0'
                            }}
                        />
                        <p 
                            style={{ 
                                font: "bold 24px 'Roboto Mono', monospace", 
                                color: '#277DCD',
                                marginBottom: '32px'
                                }}
                            >
                                SpeccUp
                            </p>
                    </Col>

                    <Col span={24} style={{ width: '100%' }}>
                        <Form.Item 
                            name='username'
                            rules={[{
                                required: true,
                                message: 'Please input your username'
                            }]}
                        >
                            <Input
                                placeholder="Username" 
                                size="large"
                                style={{
                                   fontSize: '18px'
                                }}/>
                        </Form.Item>
                    </Col>

                    <Col span={24} style={{ width: '100%' }}>
                        <Form.Item 
                            name='password'
                            rules={[{
                                required: true,
                                message: 'Please input your password'
                            }]}
                        >
                            <Input.Password
                                placeholder="Password" 
                                size="large"
                                style={{
                                   fontSize: '18px'
                                }}/>
                        </Form.Item>
                    </Col>

                    <Col span={24} style={{ width: '100%' }}>
                        <Form.Item 
                            name='remember'
                        >
                            <Checkbox style={{ color: '#333' }}>Remember me</Checkbox>
                        </Form.Item>
                    </Col>

                    <Col span={24} style={{ width: '100%' }}>
                        <Form.Item>
                            <button
                                className='login-button'
                                style={{
                                    padding: '12px 0',
                                    width: '100%',
                                    backgroundColor: colors.textColor.secondary,
                                    color: colors.textColor.support,
                                    borderRadius: '5px',
                                    font: "bold 18px 'Roboto Mono', monospace",
                                    border: 'none',
                                    marginTop: '8px'
                                }}
                            >
                                Login
                            </button>
                        </Form.Item>
                    </Col>

                    <Col
                        style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            marginTop: '8px' 
                        }}
                    >
                        <Button id="link-button" onClick={handleModalVisibility}>Forgot password?</Button>
                        <Link to='/register'>Don't have an account yet?</Link>
                    </Col>

                </Form>
            </Col>

            <ForgotPassword 
                modalVisibility={modalVisibility} 
                onCancel={handleCancel} 
            />
        </Row>
    );
};

export default Login;