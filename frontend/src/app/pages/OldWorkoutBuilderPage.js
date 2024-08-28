import { Container, Row, Col, Button } from "reactstrap";
import ExercisesList from "../../features/exercises/ExercisesList";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ExerciseCard from "../../features/exercises/ExerciseCard";
import { addExercisesToCurrentDay } from "../../features/exercises/exercisesSlice";
import './pageStyles.css';


const WorkoutBuilderPage = () => {

    const dispatch = useDispatch();

    const selectedExercises = useSelector((state) => state.exercises.selectedExercises); //select exercises from redux store
    
    const mondayWorkout = useSelector((state) => state.exercises.dailyWorkout.monday);
    const tuesdayWorkout = useSelector((state) => state.exercises.dailyWorkout.tuesday);
    const wednesdayWorkout = useSelector((state) => state.exercises.dailyWorkout.wednesday);
    const thursdayWorkout = useSelector((state) => state.exercises.dailyWorkout.thursday);
    const fridayWorkout = useSelector((state) => state.exercises.dailyWorkout.friday);
    const saturdayWorkout = useSelector((state) => state.exercises.dailyWorkout.saturday);
    const sundayWorkout = useSelector((state) => state.exercises.dailyWorkout.sunday);
    const currentDay = useSelector((state) => state.exercises.days[state.exercises.currentDayIndex]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    
    useEffect(() => {
        console.log('Selected Exercises:', selectedExercises)
        console.log('Current Day: ', currentDay);
    }, []);

    return (
        <Container>
            <h1 className="m-3">Workout Builder</h1>
            <Row>
                <Col className="theme-light-blue" style={{ border: '2px solid #002339', height: '80vh', overflowY: 'auto', padding: '50px' }}>
                    <h4>Exercises List</h4>
                    <ExercisesList />
                </Col>
                <Col className="theme-yellow" style={{ border: '2px solid #002339', height: '80vh', overflowY: 'auto', padding: '50px', marginLeft: '-1px' }}>
                    <h4>Daily Workout Schedule</h4>

                    {/*Render selected exericeses */}
                    {selectedExercises.map((exercise) => {
                        return (<ExerciseCard exercise={exercise} key={exercise.id} />);
                    })}
                    
                    <button onClick={() => dispatch(addExercisesToCurrentDay(), console.log(selectedExercises))} className="light-blue-btn">Add Exercises to {capitalizeFirstLetter(currentDay)}</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Weekly View</h1>
                    <Row style={{ border: '2px solid #002339' }}>
                        <Col>
                            <h6>Monday</h6>
                            <Row>
                                {mondayWorkout && mondayWorkout.map((exercise) => {
                                    return (
                                        <div key={exercise.id}>
                                            <p>{exercise.sets + 'x' + exercise.reps + ' ' + exercise.name}</p>
                                        </div>
                                    );
                                })}
                            </Row>
                        </Col>
                        <Col>
                            <h6>Tuesday</h6>
                            <Row>
                                {tuesdayWorkout && tuesdayWorkout.map((exercise) => {
                                    return (
                                        <div key={exercise.id}>
                                            <p>{exercise.sets + 'x' + exercise.reps + ' ' + exercise.name}</p>
                                        </div>
                                    );
                                })}
                            </Row>
                        </Col>
                        <Col>
                            <h6>Wednesday</h6>
                            <Row>
                                {wednesdayWorkout && wednesdayWorkout.map((exercise) => {
                                    return (
                                        <div key={exercise.id}>
                                            <p>{exercise.sets + 'x' + exercise.reps + ' ' + exercise.name}</p>
                                        </div>
                                    );
                                })}
                            </Row>
                        </Col>
                        <Col>
                            <h6>Thursday</h6>
                            <Row>
                                {thursdayWorkout && thursdayWorkout.map((exercise) => {
                                    return (
                                        <div key={exercise.id}>
                                            <p>{exercise.sets + 'x' + exercise.reps + ' ' + exercise.name}</p>
                                        </div>
                                    );
                                })}
                            </Row>
                        </Col>
                        <Col>
                            <h6>Friday</h6>
                            <Row>
                                {fridayWorkout && fridayWorkout.map((exercise) => {
                                    return (
                                        <div key={exercise.id}>
                                            <p>{exercise.sets + 'x' + exercise.reps + ' ' + exercise.name}</p>
                                        </div>
                                    );
                                })}
                            </Row>
                        </Col>
                        <Col>
                            <h6>Saturday</h6>
                            <Row>
                                {saturdayWorkout && saturdayWorkout.map((exercise) => {
                                    return (
                                        <div key={exercise.id}>
                                            <p>{exercise.sets + 'x' + exercise.reps + ' ' + exercise.name}</p>
                                        </div>
                                    );
                                })}
                            </Row>
                        </Col>
                        <Col>
                            <h6>Sunday</h6>
                            <Row>
                                {sundayWorkout && sundayWorkout.map((exercise) => {
                                    return (
                                        <div key={exercise.id}>
                                            <p>{exercise.sets + 'x' + exercise.reps + ' ' + exercise.name}</p>
                                        </div>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkoutBuilderPage;