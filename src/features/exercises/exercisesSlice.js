import { EXERCISES } from "../../app/data/EXERCISES";

export const selectAllExercises = () => {
    return EXERCISES;
}

export const selectExerciseById = (id) => {
    return EXERCISES.find((exercise) => exercise.id === parseInt(id));
};

export const selectExerciseByTargetMuscle = (target) => {
    return EXERCISES.find((exercise) => exercise.targets.includes(target));
};