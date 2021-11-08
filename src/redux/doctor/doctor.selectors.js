import { createSelector } from "reselect";

const selectDoctorReducer = (state) => state.doctorReducer;

export const selectDoctors = createSelector(
  [selectDoctorReducer],
  (reducer) => reducer.doctors
);
