import { NavLink } from 'react-router-dom';
import FlashFitnessLogo from '../app/assets/img/logo/flash-fitness-logo.png';
import { Container, Row, Col } from 'reactstrap';
import './FooterStyles.css';

/* 
LIGHT-BLUE: #7CD0FA
YELLOW: #FDC933
DARK-BLUE: #002339
*/



const Footer = () => {

    return (
        <footer style={{backgroundColor: '#002339', padding: '50px'}}>
            <Container>
                <Row>
                    <Col md='3' className='d-flex justify-content-center align-items-center'>
                        <h2  style={{color: '#7CD0FA'}}>© FLASH FITNESS</h2>
                    </Col>
                    <Col md='6'>
                        <input type="email" placeholder="E-MAIL" style={{border: '2px solid #7CD0FA'}}/>
                        <button type='button' className='footer-btn'>SUBSCRIBE</button>
                    </Col>
                    <Col md='3'>
                        <h3 style={{color: 'white'}}>Contact Us</h3>
                        <h5 style={{color: 'white'}}>555-726-8929</h5>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;