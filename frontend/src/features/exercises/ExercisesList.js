import { useSelector } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';
import ExerciseCard from './ExerciseCard';
import { selectAllExercises } from './exercisesSlice';
import { EXERCISES } from '../../app/data/EXERCISES';

const ExercisesList = ({ handleExerciseClick }) => {
    const exercises = EXERCISES;

    return (
        <Container>
            {
                exercises.map((exercise) => {
                    return (
                        <ExerciseCard key={exercise.id} exercise={exercise} handleExerciseClick={handleExerciseClick} />
                    );
                })
            }
        </Container>
    );
};

export default ExercisesList;