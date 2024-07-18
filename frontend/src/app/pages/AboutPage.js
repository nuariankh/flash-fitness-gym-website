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

            <div id="about-page-section-02">
                <p>
                    Embrace the journey to a healthier you with us at Flash Fitness Gym. 
                    Together, let's build strength, inspire growth, and welcome you 
                    into our thriving community.
                </p>
            </div>
        </Container>
    );
};

export default AboutPage;