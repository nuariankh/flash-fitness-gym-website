import { Container, Row, Col } from "reactstrap";
import './pageStyles.css';
import personalTrainingPhoto from '../assets/img/personal-trainer-looking-at-notebook-with-client-02.png';
import trainerInFacilityPoolPhoto from '../assets/img/personal-trainer-in-pool-with-client-01.png';
import { useState, useEffect } from "react";

const TrainersPage = () => {

    const trainersUrl = 'https://flash-fitness-gym-website.onrender.com/api/trainers';

    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                console.log('Fetching trainers...')
                const response = await fetch(trainersUrl);
                if (!response.ok) {
                    throw new Error('Something went wrong: ' + response.statusText);
                }
                const data = await response.json();
                setTrainers(data);
            } catch (err) {

            }
        } 
        fetchTrainers();

    }, [])
    
    useEffect(() => {
        console.log('Trainers updated:', trainers);
    }, [trainers]);

    return (
        <Container className='m-0 p-0'>
            
            <div id='trainers-hero-image'>
                <p>Personal Training</p>
            </div>
            <div id='trainers-section-01'>
                <h1 className="text-theme-dark-blue m-5">Meet Our Trainers!</h1>
                <div className="trainer-container">
                    { 
                        trainers.map((trainer, index) => (
                            <div className="trainer-box" key={index}>
                            <img className="trainer-image" src={trainer.image} alt="trainer image" />
                            <h4 className="trainer-box-text">{trainer.firstname}</h4>
                            <h5 className="trainer-box-text">{"\"" + trainer.tagline + "\""}</h5>
                            <h4 className="trainer-box-text">{trainer.lastname}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div id='trainers-section-02'>
                <h1>Book a Trainer Today!</h1>
                <button className="yellow-btn">START YOUR JOURNEY</button>
            </div>

            <div id='trainers-section-03'>
                <Row>
                    <Col className='m-0 p-0 d-flex justify-content-center align-items-center'>
                        <div>
                            <h1>Personal Training</h1>
                            <p className="text-trainers-page">
                                At Flash Fitness Gym, we understand that achieving fitness goals requires personalized guidance and 
                                support. That's why our personal training programs are designed to empower individuals on their 
                                journey to better health and wellness. Our experienced trainers provide tailored workout plans, 
                                nutrition advice, and ongoing motivation to help clients reach their full potential. Whether you're 
                                looking to lose weight, build muscle, or improve overall fitness, our dedicated team is committed to 
                                guiding you every step of the way.  
                            </p>
                        </div>
                    </Col>
                    <Col className='m-0 p-0 d-flex justify-content-center align-items-center'>
                        <img src={personalTrainingPhoto} className="trainers-page-image"/>
                    </Col>
                </Row>
            </div>

            <div id='trainers-section-04'>
                <Row>
                    <Col className='m-0 p-0 d-flex justify-content-center align-items-center'>
                        <img src={trainerInFacilityPoolPhoto} className="trainers-page-image"/>
                    </Col>
                    <Col className='m-0 p-0 d-flex justify-content-center align-items-center'>
                        <div>
                            <h1>Facility</h1>
                            <p className="text-trainers-page">
                                At Flash Fitness Gym, our state-of-the-art facility is the ultimate destination for personalized 
                                training experiences. Boasting top-of-the-line equipment and modern amenities, our gym provides the 
                                perfect environment for individuals to pursue their fitness goals with the guidance of our expert 
                                personal trainers. Whether you're a beginner looking to kickstart your fitness journey or an 
                                experienced athlete seeking to maximize your performance, our dedicated trainers are here to tailor 
                                workouts to your specific needs and preferences.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default TrainersPage;