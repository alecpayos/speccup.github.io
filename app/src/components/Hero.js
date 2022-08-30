import { styles } from './globals';
import '../styles/targetStyles.css';
import { Link } from 'react-router-dom';

import {
  Row,
  Col,
  Typography,
  Button
} from 'antd';


const Hero = () => {
  const { Title } = Typography;
  
  return (
    <Row
      className='hero'
      style={{
        height: '640px',
        backgroundColor: '#277DCD',
        width: 'calc(100vw - 17px)',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 'calc(64px + 1in)'
      }}
    >
      <Col span={24} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Title className='hero-message' style={styles.heroMessage.support}>
          Take everything further.<br /> <strong style={styles.heroMessage.main}>SPECC</strong> yourself <strong style={styles.heroMessage.main}>UP</strong>
        </Title>
      </Col>

      <Col style={{ marginTop: '32px' }}>
        <Link to='/speccup.github.io/register'>
          <Button 
            className='create-account'
            style={{
              border: '2px solid #FFBF00',
              backgroundColor:'#277DCD',
              color: '#FFBF00',
              font: 'bold 18px Roboto, sans-serif',
              padding: '12px 32px',
              height: '50px',
              borderRadius:' 5px',
            }}
          >
            Create Account
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default Hero;