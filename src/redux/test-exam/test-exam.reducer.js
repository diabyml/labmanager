import { DATA } from "../../seed";

const INITIAL_STATE = {
  testExams: DATA,
};

const testExamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default testExamReducer;
