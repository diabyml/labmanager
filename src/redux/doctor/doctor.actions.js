import doctorActionTypes from "./doctor.types";

export const setSelectedDoctorId = (id) => ({
  type: doctorActionTypes.SET_SELECTED_DOCTOR_ID,
  payload: id,
});

export const addNewDoctor = (doctor) => ({
  type: doctorActionTypes.ADD_NEW_DOCTOR,
  payload: doctor,
});

export const updateDoctor = (id, name, value) => ({
  type: doctorActionTypes.UPDATE_DOCTOR,
  payload: { id, name, value },
});

export const deleteDoctor = (doctorId) => ({
  type: doctorActionTypes.DELETE_DOCTOR,
  payload: doctorId,
});
