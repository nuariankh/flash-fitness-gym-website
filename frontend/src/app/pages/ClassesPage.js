import { Container } from "reactstrap";

const ClassesPage = () => {

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
                <h1>Classes Offered</h1>
                <div className="classes-container">
                    <div className="class-box">
                        <h3>Title</h3>
                        <p>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</p>
                    </div>
                    
                </div>
            </div>
        </Container>
    );
};

export default ClassesPage;