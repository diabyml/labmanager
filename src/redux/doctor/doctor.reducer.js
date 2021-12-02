import { DOCTORS } from "../../seed";
import doctorActionTypes from "./doctor.types";
const INITITIAL_STATE = {
  doctors: DOCTORS,
  selectedDoctorId: null,
};

const doctorReducer = (state = INITITIAL_STATE, action) => {
  switch (action.type) {
    case doctorActionTypes.SET_SELECTED_DOCTOR_ID:
      return {
        ...state,
        selectedDoctorId: action.payload,
      };
    case doctorActionTypes.ADD_NEW_DOCTOR:
      return {
        ...state,
        doctors: [...state.doctors, action.payload],
      };

    // UPDATE OPERATIONS

    case doctorActionTypes.UPDATE_DOCTOR:
      return {
        ...state,
        doctors: state.doctors.map((doctor) =>
          doctor.id === action.payload.id
            ? { ...doctor, [action.payload.name]: action.payload.value }
            : doctor
        ),
      };

    // DELETE
    case doctorActionTypes.DELETE_DOCTOR:
      return {
        ...state,
        doctors: state.doctors.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default doctorReducer;
