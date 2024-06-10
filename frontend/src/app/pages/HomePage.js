import { Container, Row, Col } from 'reactstrap';
import './pageStyles.css';
import peopleCelebratingPhoto from '../assets/img/group-of-people-celebrating-02.png';
import personalTrainingPhoto from '../assets/img/personal-training-01.png';
import facilityPhoto from '../assets/img/facility-01.png'

const HomePage = () => {

    return (
        <Container className='m-0 p-0'>
            <Container className='m-0 p-0'>
                <div id='hero-image'>
                    <h1>Empower Your Body.</h1>
                    <h1>Elevate Your Life.</h1>
                    <h1>Flash Fitness.</h1>
                </div>

                <div id='section-01'>
                    <h1>Join the flash Fitness Family Today and Unleash Your Potential!</h1>
                    <hr />
                    <button type='button' className='yellow-btn'>BECOME A MEMBER</button>
                </div>

                <div id='section-02'>
                    <Row>
                        <Col className='m-0 p-0'>
                            <img src={peopleCelebratingPhoto} style={{width: '800px', height: '500px', borderRadius: '25px'}} alt='People celebrating' />
                        </Col>
                        <Col className='m-0 p-0 d-flex justify-content-center align-items-center'>
                            <div>
                                <h1>Community</h1>
                                <p>
                                Flash Fitness isn't just a gym, it's a community where every drop of sweat, 
                                every challenge overcome, and every goal achieved is celebrated together!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div id='section-03'>
                    <Row>
                        <Col className='m-0 p-0 d-flex justify-content-center align-items-center'>
                            <div>
                                <h1>Personal Training</h1>
                                <p>
                                Elevate Your Workouts with Personal Training at Flash Fitness. 
                                Get personalized guidance tailored to your goals.   
                                </p>
                            </div>
                        </Col>
                        <Col className='m-0 p-0'>
                            <img src={personalTrainingPhoto} style={{width: '800px', height: '500px', borderRadius: '25px'}} alt='Personal trainer speaking to client' />
                        </Col>
                    </Row>
                </div>

                <div id='section-04'>
                    <Row>
                        <Col className='m-0 p-0'>
                            <img src={facilityPhoto} style={{width: '800px', height: '500px', borderRadius: '25px'}} alt='a birds-eye-view of the gym facility' />
                        </Col>
                        <Col className='m-0 p-0 d-flex justify-content-center align-items-center'>
                            <div>
                                <h1>Facility</h1>
                                <p>
                                    Our modern facility contains spacious workout areas, 
                                    and inspiring environments designed to fuel your passion 
                                    for fitness. From cutting-edge cardio machines to a dedicated 
                                    strength training zone, we provide everything you need to achieve your goals.  
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Container>
    )
};

export default HomePage;