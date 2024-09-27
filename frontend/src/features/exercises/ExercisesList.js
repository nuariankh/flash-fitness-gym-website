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

                            <img width="100%" src={exercise.image} alt={exercise.name} className='exercise-list-dumbbell-icon' />
                            
                            <h4 className='exercise-list-card-title'>{exercise.name}</h4>
                            
                            <div>
                                <button onClick={() => onAdd(exercise)} className='exercise-list-operator-button'>+</button>
                            </div>
                        </div>
                    );
                })
            }
            
        </Container>
    );
};

export default ExercisesList;