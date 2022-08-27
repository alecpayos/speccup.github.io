import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import altLogo from '../assets/Alt Logo.svg'
import { colors } from './globals';
import { Row, Col, Typography } from 'antd';
import { useEffect, useState } from 'react';

const Header = () => {
  const { Title } = Typography;
  const location = useLocation()
  const [ headerBackground, setHeaderBackground ] = useState('white')
  const [ headerButtonColor, setHeaderButtonColor ] = useState('#277DCD')
  const [ appLogo, setAppLogo ] = useState(logo)

  useEffect(() => {
    if(location.pathname !== '/') {
      setHeaderBackground('#277DCD')
      setHeaderButtonColor('white')
      setAppLogo(altLogo)
    } else {
      setHeaderBackground('white')
      setHeaderButtonColor('#277DCD')
      setAppLogo(logo)
    }
  }, [location])

  const button = {
    textValues: [
      "Overview",
      "Features",
      "Promo Deals",
      "Membership",
      "Log In",
      "Sign Up"
    ],
    urlValues: [
      "promo-deals",
      "login",
      "register"
    ],
    targetURL(textValue) {
      switch(textValue) {
        case "Promo Deals":
          return button.urlValues[0]
        case "Membership":
          return button.urlValues[2]
        case "Log In":
          return button.urlValues[1]
        case "Sign Up":
          return button.urlValues[2]
        default:
          return ""
      }
    }
  }

  const buttonGrid = {
    xs(value) {
      switch(value) {
        case "Log In":
          return { span: 4, offset: 9 }
        case "Sign Up":
          return 4
        default:
          return 0
      }
    },
    sm(value) {
      switch(value) {
        case "Log In":
          return { span: 3, offset: 0 }
        case "Sign Up":
          return 3
        case "Promo Deals":
          return 4
        case "Membership":
          return 4
        case "Overview":
          return { span: 3, offset: 2 }
        default:
          return 3
      }
    },
    md(value) {
      switch(value) {
        case "Log In":
          return { span: 2, offset: 0 }
        case "Promo Deals":
          return 4
        case "Membership":
          return 4
        case "Overview":
          return { span: 2, offset: 1 }
        default:
          return 3
      }
    },
    lg(value) {
      switch(value) {
        case "Log In":
          return { offset: 4 }
        case "Promo Deals":
          return 3
        case "Membership":
          return 3
        case "Overview":
          return { span: 3, offset: 0 }
        default:
          return 2
      }
    },
    xl(value) {
      switch(value) {
        case "Log In":
          return { span: 1, offset: 6 }
        default:
          return 2
      }
    },
    xxl(value) {
      switch(value) {
        case "Log In":
          return { span: 1, offset: 6 }
        case "Sign Up":
          return { span: 2 }
        default: 
          return ""
      }
    },
  }

  const FeatureButtons = () => {
    return button.textValues.map((textValue, index) => {
      return (
        <Col
          key={index}
          xs={buttonGrid.xs(textValue)}
          sm={buttonGrid.sm(textValue)}
          md={buttonGrid.md(textValue)}
          lg={buttonGrid.lg(textValue)}
          xl={buttonGrid.xl(textValue)}
          xxl={buttonGrid.xxl(textValue)}
        >
          <Link to={'/' + (button.targetURL(textValue))}>
            <div>
              <Title 
                level={5}
                style={{ 
                  textAlign: 'center', 
                  whiteSpace: 'nowrap',
                  marginBottom: 0,
                  padding: '12px 0',
                  borderRadius: '5px',
                  color: textValue === "Sign Up" 
                  ? colors.textColor.secondary
                  : headerButtonColor
                }} 
              >
                {textValue}
              </Title>
            </div>
          </Link>
        </Col>
      )
    })
  }

  return (
    <>
      <Row
        style={{ 
          alignItems: "center",
          padding: '24px 0',
          position: 'absolute',
          zIndex: '2',
          width: 'calc(100vw - 17px)',
          marginBottom: '48px',
          backgroundColor: headerBackground,
        }}
      >
        <Col 
          xs={{ span: 3, offset: 2 }}
          sm={{ span: 0 }}
          md={{ span: 1, offset: 2 }}
          lg={{ span: 1 }}
          xl={{ span: 1, offset: 3 }}
        >
          <Link to='/'><img alt='speccup logo' width={48} src={appLogo} /></Link>
        </Col>

        <FeatureButtons />
      </Row>
    </>
  );
}
 
export default Header;
