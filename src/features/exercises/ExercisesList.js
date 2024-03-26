import { useSelector } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';
import ExerciseCard from './ExerciseCard';
import { selectAllExercises } from './exercisesSlice';

const ExercisesList = ({ handleExerciseClick }) => {
    const exercises = useSelector(selectAllExercises);

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