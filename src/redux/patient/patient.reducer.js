import PATIENT_ACTION_TYPES from "./patient.types";

import { changeResultValue } from "../../utils";

const INITIAL_STATE = {
  currentPatients: [],
  selectedPatientId: null,
  patientsHistory: [],
};

const patientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // ADD OPERATIONS
    case PATIENT_ACTION_TYPES.ADD_PATIENT:
      return {
        ...state,
        currentPatients: [...state.currentPatients, action.payload],
      };
    case PATIENT_ACTION_TYPES.ADD_PATIENT_TEST_EXAM:
      return {
        ...state,
        currentPatients: state.currentPatients.map((patient) =>
          action.payload.patientId === patient.id
            ? {
                ...patient,
                testExams: [...patient.testExams, action.payload.testExam],
              }
            : patient
        ),
      };

    // SET SELECTED PATIENT ID
    case PATIENT_ACTION_TYPES.SET_SELECTED_PATIENT_ID:
      return {
        ...state,
        selectedPatientId: action.payload,
      };

    // UPDATE OPERATIONS
    case PATIENT_ACTION_TYPES.UPDATE_PATIENT_INFO:
      return {
        ...state,
        currentPatients: state.currentPatients.map((patient) =>
          action.payload.patientId === patient.id
            ? { ...patient, [action.payload.name]: action.payload.value }
            : patient
        ),
      };
    case PATIENT_ACTION_TYPES.UPDATE_PATIENT_DOCTOR_INFO:
      return {
        ...state,
        currentPatients: state.currentPatients.map((patient) =>
          patient.id === action.payload.patientId
            ? {
                ...patient,
                doctor: {
                  ...patient.doctor,
                  [action.payload.name]: action.payload.value,
                },
              }
            : patient
        ),
      };
    case PATIENT_ACTION_TYPES.UPDATE_PATIENT_RESULT:
      return {
        ...state,
        currentPatients: state.currentPatients.map((patient) =>
          action.payload.patientId === patient.id
            ? {
                ...patient,
                testExams: changeResultValue(
                  patient.testExams,
                  action.payload.testId,
                  action.payload.resId,
                  action.payload.newValue
                ),
              }
            : patient
        ),
      };

    // DELETE OPERATIONS
    case PATIENT_ACTION_TYPES.DELETE_PATIENT:
      return {
        ...state,
        currentPatients: state.currentPatients.filter(
          ({ id }) => id !== action.payload
        ),
      };
    case PATIENT_ACTION_TYPES.DELETE_PATIENT_TEST_EXAM:
      return {
        ...state,
        currentPatients: state.currentPatients.map((patient) =>
          patient.id !== action.payload.patientId
            ? patient
            : {
                ...patient,
                testExams: patient.testExams.filter(
                  ({ id }) => id !== action.payload.testExamId
                ),
              }
        ),
      };
    default:
      return state;
  }
};

export default patientReducer;
