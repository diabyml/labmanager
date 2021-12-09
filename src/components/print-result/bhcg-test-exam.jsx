import React from "react";
import StandardTestExam from "./standard-test-exam";

function BHCGTestExam({ testExam: exam }) {
  //   I have to set ref to [] array in order to show norme below
  const testExam = { ...exam, refString: [""] };
  return (
    <div className="">
      <StandardTestExam testExam={testExam} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
        <div></div>
        <div className="" style={{ paddingLeft: "7rem" }}>
          <div className="flex flex-column">
            {exam.refString.map((refStr, index) =>
              index !== exam.refString.length - 1 ? (
                <p key={index}>{refStr}</p>
              ) : null
            )}
          </div>
        </div>
      </div>
      <div>
        <p>{exam.refString[exam.refString.length - 1]}</p>
      </div>
    </div>
  );
}

export default BHCGTestExam;
