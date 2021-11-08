import React from "react";
import StandardTestExam from "./standard-test-exam";

function MultiParamTestExam({ testExam }) {
  const formatTestExam = (result) => {
    // name result refString
    console.log(result.value);
    return {
      name: result.type,
      result: [result.value],
      refString: result.refString,
    };
  };
  return (
    <div className="flow spacer-sm">
      <p className="text--md mb-sm font-bold">{testExam.label + ":"}</p>
      {testExam.result.map((result) => (
        <StandardTestExam key={result.type} testExam={formatTestExam(result)} />
      ))}
    </div>
  );
}

export default MultiParamTestExam;
