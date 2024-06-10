import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import { addExercise, removeExercise, addSet, removeSet, addRep, removeRep } from './exercisesSlice';
import './ExerciseCardStyles.css';

const ExerciseCard = ( { exercise } ) => {
    const { id, name, image, targets } = exercise;

    const dispatch = useDispatch();

    const [selected, setSelected] = useState(false);

    const sets = useSelector((state) => state.exercises.exercisesArray[id].sets);
    const reps = useSelector((state) => state.exercises.exercisesArray[id].reps);
    const allExercises = useSelector((state) => state.exercises.exercisesArray);
    const selectedExercises = useSelector((state) => state.exercises.selectedExercises);
    //const isSelected = selectedExercises.includes(exercise);

    const selectExercise = () => {
        console.log('selectedExercises: ', selectedExercises);
        console.log('exercisesArray: ', allExercises);
        if (selectedExercises && !selectedExercises.includes(exercise)) { // check if selectedExercises exists and then if it does NOT contain the current exercise
            console.log(exercise.name, 'SELECTED');
            dispatch(addExercise(exercise));
        } else {
            alert('This exercise already included.');
        }

    };

    const deselectExercise = () => {
        
        if (selectedExercises && selectedExercises.includes(exercise)) { // check if selectedExercises exists and then if it DOES contain the current exercise
            console.log(exercise.name, 'DESELECTED');
            dispatch(removeExercise(exercise));
        } else {
            alert('This exercise is not in your routine yet.');
        }
    }
    

    return (
        <div className='exercise-card'>
            <Row>
                <Col xs="5" className='d-flex justify-content-center align-items-center flex-column m-0 p-0'>
                    <img width="100%" src={image} alt={name} className='dumbbell-icon' />
                    <div>
                        <button onClick={() => selectExercise()} className='operator-button'>Add</button>
                        <button onClick={() => deselectExercise()} className='operator-button'>Remove</button>
                    </div>
                </Col>
                <Col xs="7">
                    <h4>{sets && reps > 0 ? sets + 'x' + reps + ' ' + name : name}</h4>
                    <Container className='card-container'>
                        <Row>
                            <Col>
                                <p className='mx-3'>Sets:</p>
                                <p className='mx-3'>{sets}</p>
                                <button className='operator-button' onClick={() => dispatch(addSet(exercise))}>+</button>
                                <button className='operator-button' onClick={() => dispatch(removeSet(exercise))}>-</button>
                            </Col>
                            <Col>
                                <p className='mx-3'>Reps:</p>
                                <p className='mx-3'>{reps}</p>
                                <button className='operator-button' onClick={() => dispatch(addRep(exercise))}>+</button>
                                <button className='operator-button' onClick={() => dispatch(removeRep(exercise))}>-</button>
                                </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default ExerciseCard;

//OLD CODE 

{/* <Card className='exercise-card'>
            <Row>
                <Col xs="5" className='d-flex justify-content-center align-items-center flex-column m-0 p-0'>
                    <CardImg width="100%" src={image} alt={name} className='dumbbell-icon' />
                    <div>
                        <Button onClick={() => selectExercise()} className='operator-button'>+</Button>
                        <Button onClick={() => deselectExercise()} className='operator-button'>-</Button>
                    </div>
                </Col>
                <Col xs="7">
                    <CardBody>
                        <CardTitle>{sets && reps > 0 ? sets + 'x' + reps + ' ' + name : name}</CardTitle>
                        <Container className='card-container'>
                            <Row>
                                <Col>
                                    <p className='mx-3'>Sets:</p>
                                    <p className='mx-3'>{sets}</p>
                                    <Button className='operator-button' onClick={() => dispatch(addSet(exercise))}>+</Button>
                                    <Button className='operator-button' onClick={() => dispatch(removeSet(exercise))}>-</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='mx-3'>Reps:</p>
                                    <p className='mx-3'>{reps}</p>
                                    <Button className='operator-button' onClick={() => dispatch(addRep(exercise))}>+</Button>
                                    <Button className='operator-button' onClick={() => dispatch(removeRep(exercise))}>-</Button>
                                    </Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Col>
            </Row>
        </Card> */}

