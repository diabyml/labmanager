import React from "react";
import StandardTestExam from "./standard-test-exam";
import { TEST_EXAM_TYPES } from "../../constants/test-exam-type";
import WidalTestExam from "./widal-test-exam";
import MultiParamTestExam from "./multi-param-test-exam";
import BHCGTestExam from "./bhcg-test-exam";
import GeTestExam from "./ge-test-exam";

function PrintResult({ testExam }) {
  const getTestExamType = (testExam) => {
    switch (testExam.type) {
      case TEST_EXAM_TYPES.WIDAL:
        return <WidalTestExam testExam={testExam} />;
      case TEST_EXAM_TYPES.BHCG:
        return <BHCGTestExam testExam={testExam} />;
      case TEST_EXAM_TYPES.MULTI_PARAM:
        return <MultiParamTestExam testExam={testExam} />;
      case TEST_EXAM_TYPES.GE:
        return <GeTestExam testExam={testExam} />;
      default:
        return <StandardTestExam testExam={testExam} />;
    }
  };

  return <div className="px-sm color-black">{getTestExamType(testExam)}</div>;
}

export default PrintResult;
