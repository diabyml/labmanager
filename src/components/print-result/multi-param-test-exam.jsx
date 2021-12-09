import React from "react";
import StandardTestExam from "./standard-test-exam";
import { v4 as uuidv4 } from "uuid";

function MultiParamTestExam({ testExam }) {
  const formatTestExam = (result, age) => {
    return {
      id: result.id,
      name: result.type,
      result: [
        {
          id: uuidv4(),
          value: result.value,
          unit: result.unit,
          type: undefined,
          refSign: result.refSign,
          isGenreDependent: result.isGenreDependent,
          ref: result.ref,
          age,
        },
      ],
      refString: result.refString,
    };
  };
  return (
    <div className="flow spacer-xxs">
      <p className="text--md  fw-semi-bold">
        {testExam.label && testExam.label + ":"}
      </p>
      {testExam.result.map((result) => (
        <StandardTestExam
          key={result.id}
          testExam={formatTestExam(result, testExam.age)}
        />
      ))}
      {testExam.description && (
        <div className="font-bold text--xs pl-sm">
          <p>Interpretation:</p>
          {testExam.description.map((desc, index) => (
            <p className="test-exam-description" key={index}>
              {desc}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiParamTestExam;
