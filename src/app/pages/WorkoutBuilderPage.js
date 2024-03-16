import { Container, Row, Col } from "reactstrap";
import ExercisesList from "../../features/exercises/ExercisesList";
import { useState, useEffect } from "react";

const WorkoutBuilderPage = () => {
    const [selectedExercise, setSelectedExercise] = useState(null);

    const handleExerciseClick = (exercise) => {
        setSelectedExercise(exercise); //update selected exercise when clicked
    };

    useEffect(() => {
        console.log(selectedExercise);
        }, [selectedExercise]);

    return (
        <Container>
            <h1>Workout Builder</h1>
            <Row>
                <Col style={{border: '2px solid #002339'}}>
                    <h4>Exercises List</h4>
                    <ExercisesList />
                </Col>
                <Col style={{border: '2px solid #002339'}}>
                    <h4>Daily Workout Schedule</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Workouts</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkoutBuilderPage;