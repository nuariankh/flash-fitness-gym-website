import { Container, Row, Col, Button } from "reactstrap";
import ExercisesList from "../../features/exercises/ExercisesList";
import { useState, useEffect } from "react";
import ExerciseCard from "../../features/exercises/ExerciseCard";

const WorkoutBuilderPage = () => {
    const [selectedExercises, setSelectedExercises] = useState([]);

    const removeExercise = (exerciseToRemove) => {
        setSelectedExercises([selectedExercises.filter(exercise => exercise !== exerciseToRemove)])
        console.log(selectedExercises);
    };

    const addSelectedExercise = (exercise) => {
        
        if (!selectedExercises.includes(exercise)) {
            setSelectedExercises([...selectedExercises, exercise]); //add exercise to selected exercises state array
            console.log(selectedExercises);


        } else if (selectedExercises.includes(exercise)) {
            removeExercise(exercise);
            console.log(selectedExercises);

        }


    };

    return (
        <Container>
            <h1>Workout Builder</h1>
            <Row>
                <Col style={{ border: '2px solid #002339', height: '80vh', overflowY: 'auto' }}>
                    <h4>Exercises List</h4>
                    <ExercisesList handleExerciseClick={addSelectedExercise} />
                </Col>
                <Col style={{border: '2px solid #002339', height: '80vh', overflowY: 'auto' }}>
                    <h4>Daily Workout Schedule</h4>
                    {/*Render selected exericeses */}
                    {selectedExercises.map((exercise) => {
                        return <ExerciseCard key={exercise.id} exercise={exercise} handleExerciseClick={addSelectedExercise}/>;
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