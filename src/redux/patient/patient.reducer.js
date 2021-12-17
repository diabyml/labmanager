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
        currentPatients: [action.payload, ...state.currentPatients],
      };
    case PATIENT_ACTION_TYPES.ADD_PATIENT_TO_HISTORY:
      return {
        ...state,
        patientsHistory: [...action.payload, ...state.patientsHistory],
      };
    case PATIENT_ACTION_TYPES.RESET_CURRENT_PATIENTS:
      return {
        ...state,
        currentPatients: [],
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

    case PATIENT_ACTION_TYPES.ADD_PATIENT_DOCTOR_NB:
      return {
        ...state,
        currentPatients: state.currentPatients.map((patient) =>
          patient.id === action.payload.patientId
            ? { ...patient, nb: [...patient.nb, action.payload.newNb] }
            : patient
        ),
      };

    case PATIENT_ACTION_TYPES.UPDATE_PATIENT_DOCTOR_NB:
      return {
        ...state,
        currentPatients: state.currentPatients.map((patient) =>
          patient.id === action.payload.patientId
            ? {
                ...patient,
                nb: patient.nb.map((currentNb) =>
                  currentNb.id === action.payload.nbId
                    ? { ...currentNb, content: action.payload.newValue }
                    : currentNb
                ),
              }
            : patient
        ),
      };

    case PATIENT_ACTION_TYPES.DELETE_PATIENT_DOCTOR_NB:
      return {
        ...state,
        currentPatients: state.currentPatients.map((patient) =>
          patient.id === action.payload.patientId
            ? {
                ...patient,
                nb: patient.nb.filter(({ id }) => id !== action.payload.nbId),
              }
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

    case PATIENT_ACTION_TYPES.DELETE_PATIENT_FROM_HISTORY:
      return {
        ...state,
        patientsHistory: state.patientsHistory.filter(
          ({ id }) => id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default patientReducer;
