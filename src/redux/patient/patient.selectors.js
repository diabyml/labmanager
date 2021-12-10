import { createSelector } from "reselect";

const selectPatientReducer = (state) => state.patientReducer;

export const selectCurrentPatients = createSelector(
  [selectPatientReducer],
  (patientReducer) => patientReducer.currentPatients
);

export const selectSelectedPatientId = createSelector(
  [selectPatientReducer],
  (reducer) => reducer.selectedPatientId
);

export const selectSelectedPatient = createSelector(
  [selectSelectedPatientId, selectCurrentPatients],
  (selectedPatientId, currentPatients) =>
    currentPatients.find(({ id }) => id === selectedPatientId)
);

export const selectPatientsHistory = createSelector(
  [selectPatientReducer],
  (reducer) => reducer.patientsHistory
);
