import React, { useState } from "react";
import { validateResult } from "../../utils";

import "./style.scss";

// redux
import { connect } from "react-redux";
import { selectSelectedPatient } from "../../redux/patient/patient.selectors";
import { createStructuredSelector } from "reselect";

function StandardTestExam({ testExam: exam, patient }) {
  const addValidationLogic = () => {
    return {
      ...exam,
      result: exam.result.map((res) => ({
        ...res,
        isValid: validateResult(res, patient.genre, patient.age),
      })),
    };
  };

  const [testExam, setTestExam] = useState(addValidationLogic);
  // console.log("testExam", testExam);

  const handleValidationLogicChange = (id) => {
    setTestExam((prev) => {
      return {
        ...prev,
        result: prev.result.map((res) =>
          res.id === id ? { ...res, isValid: !res.isValid } : res
        ),
      };
    });
  };

  return (
    <div>
      {testExam.groupName && (
        <p className="text--md mb-sm">
          {testExam.groupName.toUpperCase() + ":"}
        </p>
      )}
      <div className="grid-result">
        <div className="flow spacer-sm">
          <div className="grid col-2">
            <div>
              <p> {testExam.name} </p>
              {testExam.fullName && (
                <p className="test-exam-full-name fw-semi-bold text--xs">
                  {testExam.fullName}
                </p>
              )}
            </div>
            <div className="flex pl-md">
              <p
                className={` align-self-start cursor-pointer`}
                onClick={() =>
                  handleValidationLogicChange(testExam.result[0].id)
                }
              >
                <span
                  className={`${
                    !testExam.result[0].isValid && "bg--invalid px-xxs"
                  }`}
                >
                  {testExam.result[0].value}
                </span>
                {testExam.result[0].unit !== "none" && (
                  <span> {` ${testExam.result[0].unit}`} </span>
                )}
              </p>
            </div>
          </div>
          {testExam.result.length > 1 &&
            testExam.result.map((res, index) =>
              index !== 0 ? (
                <div className="grid col-2" key={res.id}>
                  <div>
                    <p>{res.type !== "g/l" && res.type}</p>
                  </div>
                  <div className="flex pl-md">
                    <p
                      className={`align-self-start cursor-pointer`}
                      onClick={() => handleValidationLogicChange(res.id)}
                    >
                      <span
                        className={`${!res.isValid && "bg--invalid px-xxs"}`}
                      >
                        {res.value}
                      </span>
                      {res.unit !== "none" && <span> {` ${res.unit}`} </span>}
                    </p>
                  </div>
                </div>
              ) : null
            )}
        </div>
        <div className="flex flex-column  flow spacer-sm">
          {testExam.refString.map((refStr, index) => (
            <p key={index}>{refStr}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

// const Value = (res) => {
//   return (
//     <>
//       <span className={`${!res.isValid && "bg--invalid px-xxs"}`}>
//         {res.value}
//       </span>
//       {res.unit !== "none" && <span> {` ${res.unit}`} </span>}
//     </>
//   );
// };

const mapStateToProps = createStructuredSelector({
  patient: selectSelectedPatient,
});

export default connect(mapStateToProps)(StandardTestExam);
