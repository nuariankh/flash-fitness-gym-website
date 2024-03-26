import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Row, Col, Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import { addExercise, removeExercise, addSet, removeSet, addRep, removeRep } from './exercisesSlice';

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
        <Card>
            <Row>
                <Col xs="4" className='d-flex justify-content-center'>
                    <CardImg top width="100%" src={image} alt={name} />
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button onClick={() => selectExercise()}>+</Button>
                        <Button onClick={() => deselectExercise()}>-</Button>
                    </div>
                </Col>
                <Col xs="8">
                    <CardBody className='justify-content-center'>
                        <CardTitle>{sets && reps > 0 ? sets + 'x' + reps + ' ' + name : name}</CardTitle>
                        <div className='d-flex'>
                            <h6 className='mx-3'>Sets:</h6>
                            <p className='mx-3'>{sets}</p>
                            <Button className='' onClick={() => dispatch(addSet(exercise))}>+</Button>
                            <Button className='' onClick={() => dispatch(removeSet(exercise))}>-</Button>
                            <h6 className='mx-3'>Reps:</h6>
                            <p className='mx-3'>{reps}</p>
                            <Button className='' onClick={() => dispatch(addRep(exercise))}>+</Button>
                            <Button className='' onClick={() => dispatch(removeRep(exercise))}>-</Button>
                        </div>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
}

export default ExerciseCard;

