import React from "react";
import StandardTestExam from "./standard-test-exam";
import { v4 as uuidv4 } from "uuid";

function MultiParamTestExam({ testExam }) {
  const formatTestExam = (result) => {
    return {
      id: result.id,
      name: result.type,
      result: [{ id: uuidv4(), value: result.value, type: undefined }],
      refString: result.refString,
    };
  };
  return (
    <div className="flow spacer-sm">
      <p className="text--md mb-sm font-bold">{testExam.label + ":"}</p>
      {testExam.result.map((result) => (
        <StandardTestExam key={result.id} testExam={formatTestExam(result)} />
      ))}
      {testExam.description && (
        <div className="font-bold text--xs pl-sm">
          <p>Interpretation:</p>
          {testExam.description.map((desc, index) => (
            <p key={index}> {desc} </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiParamTestExam;
