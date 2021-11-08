import PATIENT_ACTION_TYPES from "./patient.types";

//  add patient
export const addPatient = (patient) => ({
  type: PATIENT_ACTION_TYPES.ADD_PATIENT,
  payload: patient,
});

export const addPatientTestExam = (patientId, testExam) => ({
  type: PATIENT_ACTION_TYPES.ADD_PATIENT_TEST_EXAM,
  payload: { patientId, testExam },
});

//  Update operations on patient
export const updatePatientInfo = (patientId, name, value) => ({
  type: PATIENT_ACTION_TYPES.UPDATE_PATIENT_INFO,
  payload: { patientId, name, value },
});

export const updatePatientDoctorInfo = (patientId, name, value) => ({
  type: PATIENT_ACTION_TYPES.UPDATE_PATIENT_DOCTOR_INFO,
  payload: { patientId, name, value },
});

export const updatePatientResult = (patientId, testId, resId, newValue) => ({
  type: PATIENT_ACTION_TYPES.UPDATE_PATIENT_RESULT,
  payload: { patientId, testId, resId, newValue },
});

// Delete operations on Patient
export const deletePatient = (patientId) => ({
  type: PATIENT_ACTION_TYPES.DELETE_PATIENT,
  payload: patientId,
});

export const deletePatientTestExam = (patientId, testExamId) => ({
  type: PATIENT_ACTION_TYPES.DELETE_PATIENT_TEST_EXAM,
  payload: { patientId, testExamId },
});

export const setSelectedPatientId = (id) => ({
  type: PATIENT_ACTION_TYPES.SET_SELECTED_PATIENT_ID,
  payload: id,
});
