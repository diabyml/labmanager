import { combineReducers } from "redux";

// REDUCERS
import patientReducer from "./patient/patient.reducer";
import testExamReducer from "./test-exam/test-exam.reducer";
import doctorReducer from "./doctor/doctor.reducer";

const rootReducer = combineReducers({
  patientReducer,
  testExamReducer,
  doctorReducer,
});

export default rootReducer;
