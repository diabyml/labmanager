import { createSelector } from "reselect";

const selectTestExamReducer = (state) => state.testExamReducer;

export const selectTestExams = createSelector(
  [selectTestExamReducer],
  (reducer) => reducer.testExams
);
