import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import './ExerciseCardAndListStyles.css';

const ExerciseCard = ( { exercise, onAdd, onRemove, updateExerciseSetsReps } ) => {
    const { id } = exercise
    const { name, image, targets, sets, reps } = exercise.exerciseType;

    const [localSets, setLocalSets] = useState(sets || 0);
    const [localReps, setLocalReps] = useState(reps || 0);

    const handleSetsChange = (newSets) => {
        setLocalSets(newSets);
        updateExerciseSetsReps(id, newSets, localReps);
    }

    const handleRepsChange = (newReps) => {
        setLocalReps(newReps);
        updateExerciseSetsReps(id, localSets, newReps);
    }
    

    return (
        <div className='exercise-card'>
            <Row>
                <Col className='d-flex justify-content-center align-items-center flex-column m-0 p-0'>
                    <img width="100%" src={image} alt={name} className='dumbbell-icon' />
                    <div>
                        <button onClick={() => onAdd()} className='operator-button'>Add</button>
                        <button onClick={() => onRemove(exercise.id)} className='operator-button'>Remove</button>
                    </div>
                </Col>
                <Col>
                    <h4 className='exercise-card-title'>{localSets && localReps > 0 ? localSets + 'x' + localReps + ' ' + name : name}</h4>
                    <Container className='card-container'>
                        <Row>
                            <Col>
                                <p className='mx-3'>Sets:</p>
                                <p className='mx-3'>{localSets}</p>
                                <button className='operator-button' onClick={() => handleSetsChange(localSets + 1)}>+</button>
                                <button className='operator-button' onClick={() => handleSetsChange(localSets - 1)}>-</button>
                            </Col>
                            <Col>
                                <p className='mx-3'>Reps:</p>
                                <p className='mx-3'>{localReps}</p>
                                <button className='operator-button' onClick={() => handleRepsChange(localReps + 1)}>+</button>
                                <button className='operator-button' onClick={() => handleRepsChange(localReps - 1)}>-</button>
                                </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default ExerciseCard;