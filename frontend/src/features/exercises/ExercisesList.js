import { useSelector } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';
import ExerciseCard from './ExerciseCard';
import { selectAllExercises } from './exercisesSlice';
import { EXERCISES } from '../../app/data/EXERCISES';
import './ExerciseCardAndListStyles.css';

const ExercisesList = ({ onAdd, onRemove }) => {
    const exercises = EXERCISES;

    return (
        <Container>
            {
                exercises.map((exercise) => {
                    return (
                        <div className='exercise-list-card' key={exercise.name}>
                            <Row>
                                <Col xs="5" className='d-flex justify-content-center align-items-center flex-column m-0 p-0'>
                                    <img width="100%" src={exercise.image} alt={exercise.name} className='dumbbell-icon' />
                                    
                                </Col>
                                <Col xs="7">
                                    <h4>{exercise.name}</h4>
                                    <div>
                                        <button onClick={() => onAdd(exercise)} className='exercise-list-operator-button'>+</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    );
                })
            }
            
        </Container>
    );
};

export default ExercisesList;