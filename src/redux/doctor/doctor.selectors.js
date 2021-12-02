import { createSelector } from "reselect";

const selectDoctorReducer = (state) => state.doctorReducer;

export const selectDoctors = createSelector(
  [selectDoctorReducer],
  (reducer) => reducer.doctors
);
export const selectSelectedDoctorId = createSelector(
  [selectDoctorReducer],
  (reducer) => reducer.selectedDoctorId
);

export const selectSelectedDoctor = createSelector(
  [selectSelectedDoctorId, selectDoctors],
  (id, doctors) => doctors.find((d) => d.id === id)
);
