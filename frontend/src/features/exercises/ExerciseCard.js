import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import { addExercise, removeExercise, addSet, removeSet, addRep, removeRep } from './exercisesSlice';
import './ExerciseCardStyles.css';

const ExerciseCard = ( { exercise, onAdd, onRemove } ) => {
    const { id, name, image, targets } = exercise;

    const dispatch = useDispatch();

    const [selected, setSelected] = useState(false);

    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    

    return (
        <div className='exercise-card'>
            <Row>
                <Col xs="5" className='d-flex justify-content-center align-items-center flex-column m-0 p-0'>
                    <img width="100%" src={image} alt={name} className='dumbbell-icon' />
                    <div>
                        <button onClick={() => onAdd()} className='operator-button'>Add</button>
                        <button onClick={() => onRemove()} className='operator-button'>Remove</button>
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

