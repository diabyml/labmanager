import { combineReducers } from "redux";

// REDUCERS
import patientReducer from "./patient/patient.reducer";
import testExamReducer from "./test-exam/test-exam.reducer";
import doctorReducer from "./doctor/doctor.reducer";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["patientReducer", "testExamReducer", "doctorReducer"],
};

const rootReducer = combineReducers({
  patientReducer,
  testExamReducer,
  doctorReducer,
});

export default persistReducer(persistConfig, rootReducer);
