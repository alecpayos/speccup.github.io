import logo from '../assets/logo.png';
import { colors } from './globals';
import { Link } from "react-router-dom";
import { Row, Col, Typography } from 'antd';
import { GithubOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer = () => {

    const { Paragraph, Title } = Typography;
    const navButtons = [ 'Home', 'Features', 'Promo Deals', 'Membership' ];

    const DigitalContactIcons = ({ style, index }) => {
        switch(index) {
            case 0:
                return <GithubOutlined style={style} />
            case 1:
                return <FacebookOutlined style={style} />
            case 2:
                return <InstagramOutlined style={style} />
            default:
                return null
        }
    };

    const personalInformation = {
        digitalContacts: [
            'https://github.com/alecpayos/portfolio',
            'https://web.facebook.com/alex.mnp.12',
            'https://www.instagram.com/leux.martini/'
        ],
        physicalContacts: [
            'alecpayos.2020@gmail.com',
            '(+63) 966 560 9246',
            '(053) 523 8672'
        ]
    }

    return (
        <Row
        style={{ 
            backgroundColor: '#277DCD', 
            padding: '24px 0 16px 0'
        }}>
            <Col
            xs={{ span: 0 }}
            sm={{ span: 0 }}
            md={{ span: 2, offset: 2 }}
            lg={{ offset: 2 }}
            xl={{ offset: 2 }}
            xxl={{ span: 1, offset: 3 }}
            >
                <img 
                alt='speccup logo'
                style={{ 
                    backgroundColor: 'white', 
                    width: '64px', 
                    marginRight: '16px',
                    padding: '8px',
                    borderRadius: '50%'
                }} 
                src={logo} 
                />
            </Col>

            <Col
            xs={{ span: 18, offset: 2 }}
            sm={{ span: 22, offset: 1 }}
            md={{ span: 16, offset: 0 }}
            lg={{ span: 16 }}
            xl={{ span: 6 }}
            xxl={{ span: 9 }}
            >
                <Title style={{ color: colors.textColor.secondary }} level={3}>
                    SpeccUp © 2020
                </Title>
                <Paragraph style={{ color: colors.textColor.support }}>
                    SpeccUp is a fitness web application that 
                    is concerned with the lifestyle, health, 
                    and well-being of its users. We guarantee
                    our valued clients, customers, and users that
                    the respective information that we collect 
                    will not be misused per our
                    
                    <Link 
                    style={{ color: colors.textColor.secondary, fontWeight: 'bold' }} 
                    to='/privacy-policy'> Privacy Policy
                    </Link>. 
                    
                    SpeccUp reserve its
                    rights to discontinue its service to clients and
                    users in the event that users breach our
                    
                    <Link 
                    style={{ color: colors.textColor.secondary, fontWeight: 'bold' }} 
                    to='/terms-of-use'> Terms of Use
                    </Link>.

                    Thank you for you understanding, happy grinding!

                </Paragraph>
            </Col>

            <Col 
            xs={{ span: 9, offset: 2 }}
            sm={{ span: 8, offset: 1 }}
            md={{ span: 6, offset: 4 }}
            lg={{ span: 7, offset: 4 }}
            xl={{ span: 3, offset: 1}}
            xxl={{ span: 2 }}
            span={3}
            style={{ whiteSpace: 'nowrap' }}
            >
                <Title style={{ color: colors.textColor.secondary }} level={4}>Contact Us</Title>
                {personalInformation.physicalContacts.map((contact, index) => (
                    <Paragraph
                    key={index}
                    style={{ color: colors.textColor.support }}>
                        {contact}
                    </Paragraph>
                ))}
            </Col>
            
            <Col 
            xs={{ span: 7, offset: 2 }}
            sm={{ span: 5, offset: 1 }}
            md={{ span: 4, offset: 0 }}
            lg={{ span: 5}}
            xl={{ span: 3, offset: 1 }}
            xxl={{ span: 2 }}
            style={{ whiteSpace: 'nowrap' }}
            >
                <Title level={4} style={{ color: colors.textColor.secondary }}>Navigate</Title>
                {navButtons.map((text, index) => (
                    <Paragraph key={index}>
                        <Link 
                        to={'/' + (text === 'Home' ? "" : text.toLowerCase().replace(" ", "-"))}
                        style={{ 
                            color: colors.textColor.support 
                        }}>
                            {text}
                        </Link>
                    </Paragraph>
                ))}
            </Col>

            <Col 
            xs={{ offset: 2, span: 9 }}
            sm={{ offset: 1, span: 7 }}
            md={{ offset: 0, span: 5 }}
            lg={{ span: 4 }}
            xl={{ span: 3 }}
            span={3}
            style={{ whiteSpace: 'nowrap' }}
            >
                <Title style={{ color: colors.textColor.secondary }} level={4}>Reach out to us!</Title>
                {personalInformation.digitalContacts.map((url, index) => (
                    <a key={index} href={url}>
                        <DigitalContactIcons 
                        index={index}
                        style={{ 
                            color: colors.textColor.support, 
                            fontSize: '32px',
                            marginRight: '8px',
                            backgroundColor: 'transparent'
                        }} />
                    </a>
                ))}
            </Col>
        </Row>
    );
}
 
export default Footer;