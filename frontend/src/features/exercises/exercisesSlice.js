import { createSlice } from "@reduxjs/toolkit";
import { EXERCISES } from "../../app/data/EXERCISES";

const initialState = {
    exercisesArray: EXERCISES.map((exercise) => ({...exercise, 
        sets: 0,
        reps: 0,
    })),
    selectedExercises: [],
    days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    currentDayIndex: 0,
    dailyWorkout: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thrusday: [],
        friday: [],
        saturday: [],
        sunday: []
    },

};

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        addExercise: (state, action) => {
            return {
                ...state, 
                selectedExercises: [...state.selectedExercises, action.payload]
            }
        },
        removeExercise: (state, action) => {
            return { ...state,
                selectedExercises: state.selectedExercises.filter(exercise => exercise.id !== action.payload.id)
            }
        },
        addSet: (state, action) => {
            return { ...state, exercisesArray: state.exercisesArray.map((exercise) => {
                if (exercise.id === action.payload.id) {
                    return { ...exercise, sets: exercise.sets + 1};
                }
                return exercise;
            }) }
        },
        removeSet: (state, action) => {
            return { ...state, exercisesArray: state.exercisesArray.map((exercise) => {
                if (exercise.id === action.payload.id) {
                    return { ...exercise, sets: exercise.sets - 1, };
                }
                return exercise;
            }) }
        },
        addRep: (state, action) => {
            return { ...state, exercisesArray: state.exercisesArray.map((exercise) => {
                if (exercise.id === action.payload.id) {
                    return { ...exercise, reps: exercise.reps + 1 };
                }
                return exercise;
            }) }
        },
        removeRep: (state, action) => {
            return { ...state, exercisesArray: state.exercisesArray.map(exercise => {
                if (exercise.id === action.payload.id) {
                    return { ...exercise, reps: exercise.reps - 1 };
                }
                return exercise;
            }) }
        },
        addExercisesToCurrentDay: (state, action) => {
            const nextDayIndex = state.currentDayIndex + 1;
            return { ...state, 
                dailyWorkout: { ...state.dailyWorkout, [state.days[state.currentDayIndex]]: state.selectedExercises }, 
                currentDayIndex: nextDayIndex,
                selectedExercises: []
            }
        }
    }
});

export const { addExercise, removeExercise, addSet, removeSet, addRep, removeRep, addExercisesToCurrentDay } = exercisesSlice.actions;

export const exercisesReducer = exercisesSlice.reducer;

export const selectAllExercises = (state) => {
    return state.exercises.exercisesArray;
};

export const selectAllSelectedxercises = (state) => {
    return state.exercises.selectedExercises; 
};