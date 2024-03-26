import { Container, Row, Col, Button } from "reactstrap";
import ExercisesList from "../../features/exercises/ExercisesList";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ExerciseCard from "../../features/exercises/ExerciseCard";

const WorkoutBuilderPage = () => {

    const selectedExercises = useSelector((state) => state.exercises.selectedExercises); //select exercises from redux store

    
    useEffect(() => {
        console.log('Selected Exercises:', selectedExercises)
    }, []);

    return (
        <Container>
            <h1>Workout Builder</h1>
            <Row>
                <Col style={{ border: '2px solid #002339', height: '80vh', overflowY: 'auto' }}>
                    <h4>Exercises List</h4>
                    <ExercisesList />
                </Col>
                <Col style={{border: '2px solid #002339', height: '80vh', overflowY: 'auto' }}>
                    <h4>Daily Workout Schedule</h4>

                    {/*Render selected exericeses */}
                    {selectedExercises.map((exercise) => {
                        return (<ExerciseCard exercise={exercise} key={exercise.id} isSelected={true} />);
                    })}
                    
                    <Button>Complete Day</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Weekly View</h1>
                    <Row style={{ border: '2px solid #002339' }}>
                        <Col>
                        <h6>Monday</h6>
                        </Col>
                        <Col>
                        <h6>Tuesday</h6>
                        </Col>
                        <Col>
                        <h6>Wednesday</h6>
                        </Col>
                        <Col>
                        <h6>Thursday</h6>
                        </Col>
                        <Col>
                        <h6>Friday</h6>
                        </Col>
                        <Col>
                        <h6>Saturday</h6>
                        </Col>
                        <Col>
                        <h6>Sunday</h6>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkoutBuilderPage;