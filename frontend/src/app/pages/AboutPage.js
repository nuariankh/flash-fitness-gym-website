import { Container } from "reactstrap";
import photoOfGymPeople01  from '../assets/img/member-selfie-01.png';
import photoOfGymPeople02  from '../assets/img/member-selfie-02.png';


const AboutPage = () => {

    return (
        <Container className="m-0 p-0">
            <div id="about-page-hero-image">
                <p>About Us</p>
            </div>

            <div id="about-page-section-01">
                <p className="about-page-section-01-text">
                    At Flash Fitness, we embrace a holistic approach to wellness, combining 
                    physical fitness with mental well-being. Our community-driven environment 
                    encourages every member to achieve their personal best, fostering a 
                    culture of support, motivation, and growth. We believe in the power of 
                    diverse workouts, expert guidance, and the strength found in unity, 
                    creating a vibrant and inclusive space where everyone can thrive. 
                    Join us and experience the Flash Fitness way of life, where your health 
                    and happiness are our top priorities.
                </p>
            </div>

            <div id="about-page-section-02">
                <div className="about-page-section-01-box">
                    <img className="about-page-section-01-box-img" src={photoOfGymPeople01}/>
                    <h3>Passion for Fitness</h3>
                    <p>
                        At Flash Fitness Gym, we're passionate about fitness, dedicated to 
                        helping individuals achieve their health goals through 
                        personalized training and expert guidance.
                    </p>
                </div>
                <div className="about-page-section-01-box">
                    <img className="about-page-section-01-box-img" src={photoOfGymPeople01} />
                    <h3>Community Commitment</h3>
                    <p>
                        We're more than a gym; we're a supportive community where 
                        inclusivity thrives. We foster connections and celebrate 
                        achievements, creating a welcoming environment for everyone.
                    </p>
                </div>
            </div>

            <div id="about-page-section-03">
                <div className="classes-page-section-03-text-container">
                    <p className="classes-page-section-03-text">
                        Embrace the journey to a healthier you with us at Flash Fitness Gym. 
                        Together, let's build strength, inspire growth, and welcome you 
                        into our thriving community.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default AboutPage;