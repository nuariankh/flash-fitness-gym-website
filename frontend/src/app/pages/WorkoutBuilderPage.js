import { Container, Row, Col, Button } from "reactstrap";
import ExercisesList from "../../features/exercises/ExercisesList";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ExerciseCard from "../../features/exercises/ExerciseCard";
import { addExercisesToCurrentDay } from "../../features/exercises/exercisesSlice";
import './pageStyles.css';
import { EXERCISES } from "../data/EXERCISES";


const WorkoutBuilderPage = () => {

    const exercises = EXERCISES;

    const [selectedExercises, setSelectedExercises] = useState([]);
    const [currentDay, setCurrentDay] = useState('Monday');
    const [weeklyWorkouts, setWeeklyWorkouts] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
    });

    const addExercise = (exercise) => {
        setSelectedExercises([...selectedExercises, { ...exercise }]);
    };

    const removeExercise = (exerciseId) => {
        setSelectedExercises(selectedExercises.filter(ex => ex.id !== exerciseId));
    };

    const addToCurrentDay = () => {
        setWeeklyWorkouts({
            ...weeklyWorkouts,
            [currentDay]: [...weeklyWorkouts[currentDay], ...selectedExercises]
        });
        setSelectedExercises([]); // Clear the selected exercises after adding them to the day
    };

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
                    {
                        exercises.map((exercise) => {
                            return (
                                <ExerciseCard 
                                    key={exercise.id} 
                                    exercise={exercise} 
                                    onAdd={() => addExercise(exercise)} 
                                />
                            );
                        })
                    }
                </Col>
                <Col className="theme-yellow" style={{ border: '2px solid #002339', height: '80vh', overflowY: 'auto', padding: '50px', marginLeft: '-1px' }}>
                    <h4>Daily Workout Schedule</h4>

                    {/*Render selected exericeses */}
                    {selectedExercises.map((exercise) => {
                        return (<ExerciseCard 
                                    key={exercise.id} 
                                    exercise={exercise} 
                                    onRemove={() => removeExercise(exercise.id)}  
                            />);
                    })}
                    
                    <button onClick={() => addToCurrentDay} className="light-blue-btn">
                        Add Exercises to {currentDay}
                    </button>
                    
                    <select value={currentDay} onChange={(e) => setCurrentDay(e.target.value)}>
                        {Object.keys(weeklyWorkouts).map(day => (
                            <option key={day} value={day}>{day}</option>
                        ))}
                    </select>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkoutBuilderPage;