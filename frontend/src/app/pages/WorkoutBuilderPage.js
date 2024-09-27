import { Container, Row, Col } from "reactstrap";
import ExercisesList from "../../features/exercises/ExercisesList";
import { useState, useEffect } from "react";
import ExerciseCard from "../../features/exercises/ExerciseCard";
import './pageStyles.css';
import { EXERCISES } from "../data/EXERCISES";
import { saveAs } from 'file-saver';
import { AlignmentType, Document, Packer, Paragraph, TextRun } from 'docx';


const WorkoutBuilderPage = () => {

    const exercises = EXERCISES;

    class RoutineExercise {
        constructor(exerciseType, sets = 0, reps = 0) {
            this.id = crypto.randomUUID();
            this.exerciseType = exerciseType;
            this.sets = sets;
            this.reps = reps;
        }
    }

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
        const newExercise = new RoutineExercise(exercise)
        setSelectedExercises(prevSelectedExercises => [...prevSelectedExercises, newExercise]);
    };

    const removeExercise = (exerciseId) => {
        setSelectedExercises(selectedExercises.filter(exercise => exercise.id !== exerciseId));
    };

    const removeExerciseFromDay = (exerciseId, day) => {
        setWeeklyWorkouts((prevWeeklyWorkouts) => {
            const updatedDayWorkouts = prevWeeklyWorkouts[day].filter(exercise => exercise.id !== exerciseId);

            return { ...prevWeeklyWorkouts, [day]: updatedDayWorkouts};
        });
    }

    const addToCurrentDay = () => {
        setWeeklyWorkouts((prevWeeklyWorkouts) => ({ 
            ...prevWeeklyWorkouts, 
            [currentDay]: [...prevWeeklyWorkouts[currentDay], ...selectedExercises]}
        ));
        setSelectedExercises([]); // Clear the selected exercises after adding them to the day
    };

    const updateExerciseSetsReps = (id, sets, reps) => {
        setSelectedExercises((prevSelectedExercises) => 
            prevSelectedExercises.map((exercise) => 
                exercise.id === id ? {...exercise, sets, reps} : exercise //update the exercises sets and reps to the params values
            )
        )
    }

    const saveWorkoutToFile = () => {

        const workoutParagraphs = [];

        workoutParagraphs.push(new Paragraph({
            children: [
                new TextRun({
                    text: "WORKOUT PLAN",
                    bold: true,
                    size: 28
                })
            ],
            spacing: { after: 400 }, //Space after day name
            alignment: AlignmentType.CENTER,
        }));

        Object.keys(weeklyWorkouts).forEach((day) => {
            //Day as header
            workoutParagraphs.push(new Paragraph({
                children: [
                    new TextRun({
                        text: day,
                        bold: true,
                        size: 28
                    })
                ],
                spacing: { after: 200 } //Space after day name
            }));

            //Add exercises for that day
            weeklyWorkouts[day].forEach((exercise) => {
                workoutParagraphs.push(
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `${exercise.sets}x${exercise.reps} ${exercise.exerciseType.name}`,
                                size: 24, //12pt font size
                            }),
                        ],
                        spacing: { after: 100 }, //Spacing after each exercise
                    })
                )
            })

            //Add spacing after each day
            workoutParagraphs.push(new Paragraph({ text: "", spacing: { after: 400 } }))
        });

        const doc = new Document({
            sections: [{
                properties: {},
                children: workoutParagraphs
            }],
        });

        Packer.toBlob(doc).then((blob) => {
            saveAs(blob, "Workout-Plan.docx");
        });
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        console.log(`${currentDay} Workouts: `, weeklyWorkouts[currentDay]);
    }, [weeklyWorkouts])
    

    return (
        <Container>
            <h1 className="m-3">Workout Builder</h1>
            <Row>
                <div className=" weeklySchedule">
                    {Object.keys(weeklyWorkouts).map((dayOfTheWeek) => {
                        return (
                            <div className="dayOfTheWeek" key={dayOfTheWeek}>
                                <h4>{dayOfTheWeek}</h4>
                                {
                                    weeklyWorkouts[dayOfTheWeek].map((exercise) => {
                                        return (
                                            <div className="smallDailyExerciseCard">
                                                <p>{exercise.sets + "x" + exercise.reps + " " + exercise.exerciseType.name}</p>
                                                <button className="smallDailyExerciseCardButton" onClick={() => removeExerciseFromDay(exercise.id, dayOfTheWeek.toString())}>Remove</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })}
                </div>
            </Row>
            <Row>
                
                <div className="d-flex justify-content-center aligjn-items-center flex-column">
                    <button className="saveWorkoutButton" onClick={saveWorkoutToFile}>Save Workout</button>
                    <select value={currentDay} onChange={(e) => setCurrentDay(e.target.value)} className="currentDaySelect">
                        {Object.keys(weeklyWorkouts).map(day => (
                        <option key={day} value={day}>{day}</option>
                        ))}
                </select>
                </div>
                
            </Row>

            <Row className="mb-4">
                <Col className="workoutBuilderColumnBlue">
                    <h2>Exercises List</h2>
                    {
                        <ExercisesList
                            onAdd={addExercise}
                            onRemove={removeExercise}
                        />
                    }
                </Col>
                <Col className="workoutBuilderColumnYellow">
                    <h2>Daily Workout Schedule</h2>
                    
                    {/*Render selected exericeses */}
                    {selectedExercises.map((exercise) => {
                        return (<ExerciseCard 
                                    key={exercise.id} 
                                    exercise={exercise} 
                                    onAdd={() => addExercise(exercise.exerciseType)}
                                    onRemove={() => removeExercise(exercise.id)}
                                    updateExerciseSetsReps={updateExerciseSetsReps}
                            />);
                    })}
                    <div className="d-flex flex-column m-3">
                        <button onClick={() => addToCurrentDay()} className="light-blue-btn m-1">
                            Add Exercises to {currentDay}
                        </button>
                    </div>
                    
                    
                    
                </Col>
            </Row>
        </Container>
    );
};

export default WorkoutBuilderPage;