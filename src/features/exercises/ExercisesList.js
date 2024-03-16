import { Col, Row, Container } from 'reactstrap';
import ExerciseCard from './ExerciseCard';
import { selectAllExercises } from './exercisesSlice';

const ExercisesList = ( {handleExerciseClick} ) => {
    const exercises = selectAllExercises();

    return (
        <Container>
            {
                exercises.map((exercise) => {
                    return (
                        <ExerciseCard key={exercise.id} exercise={exercise} />
                    );
                })
            }
        </Container>
    );
};

export default ExercisesList;