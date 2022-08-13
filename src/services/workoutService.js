const { v4: uuid } = require("uuid");

const Workout = require("../database/Workout");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();

  return allWorkouts;
};

const getOneWorkout = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const createNewWorkout = () => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),

    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
