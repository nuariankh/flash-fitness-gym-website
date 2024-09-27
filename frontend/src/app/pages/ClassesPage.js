import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import Loading from "../../components/Loading";

const ClassesPage = () => {

    const classesUrl = 'https://flash-fitness-gym-website.onrender.com/api/classes';

    const [isLoading, setIsLoading] = useState([]);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                console.log('Fetching classes...');
                const response = await fetch(classesUrl);
                if (!response.ok) {
                    throw new Error('Something went wrong: ' + response.statusText);
                }
                const data = await response.json();
                console.log('Classes recieved');
                setClasses(data);
                setIsLoading(false)
            } catch (err) {

            }
        }
        fetchClasses();
    });

    return (
        <Container className="m-0 p-0">
            <div id="classes-page-hero-image">
                <p>Classes</p>
            </div>
            <div id="classes-page-section-01">
                <p>
                    Flash Fitness Gym offers a variety of classes that cater to all fitness levels and 
                    interests, fostering a vibrant and inclusive atmosphere. From high-intensity 
                    interval training and strength building to calming yoga and energetic dance 
                    workouts, there's something for everyone. The diverse class schedule ensures that 
                    every member can find a workout that fits their goals and preferences, creating a 
                    dynamic and supportive fitness community.
                </p>
            </div>
            <div id="classes-page-section-02">
                <div className="d-flex justify-content-center align-items-center">
                    <h1>Classes Offered</h1>
                </div>
                
                <div className="classes-container">
                    {
                    isLoading ?
                    (
                        <Loading />
                    )
                    :
                    (
                        classes.map((gymClass, index) => (
                            <div className="class-box" key={index}>
                                <h3>{gymClass.name}</h3>
                                <p className="classes-page-class-description">{gymClass.description}</p>
                                <p className="classes-page-class-days">{gymClass.offeredOn.join(", ")}</p>
                            </div>
                        ))
                    )
                    }
                    
                    
                </div>
            </div>
        </Container>
    );
};

export default ClassesPage;