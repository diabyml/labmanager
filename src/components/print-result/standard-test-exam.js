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

  const renderResultValue = (value) => {
    switch (exam.name) {
      case "Groupage/RH":
        return (
          <span className="roupage-rheseus-result font-bold"> {value} </span>
        );
      default:
        return <> {value} </>;
    }
  };

  const renderResultUnit = (res) => {
    // console.log("exam.name", exam.name);
    // console.log("parsed ge value:", parseFloat(res.value));
    switch (exam.name) {
      case "GE":
      case "Taux de réticulocytes":
        return (
          <>
            <span>
              {parseFloat(res.value) ? (
                <>
                  {` ${res.unit}`} <sup>3</sup>
                </>
              ) : null}
            </span>
          </>
        );

      default:
        return <>{res.unit !== "none" && <span> {` ${res.unit}`} </span>}</>;
    }
  };

  const renderRefString = (testExam, refStringArr) => {
    if (testExam.isRefStringHtml) {
      return (
        <div dangerouslySetInnerHTML={{ __html: testExam.refStringHtml }}></div>
      );
    } else {
      return (
        <>
          {refStringArr.map((refStr, index) => (
            <p key={index} className="print-ref">
              {refStr}
            </p>
          ))}
        </>
      );
    }
  };

  return (
    <div>
      {testExam.groupName && (
        <p className="text--md">{testExam.groupName.toUpperCase() + ":"}</p>
      )}
      <div className="grid-result">
        <div>
          {/* className="flow spacer-sm" */}
          <div className="grid col-2">
            <div>
              <p className="text-now-wrap"> {testExam.name} </p>
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
                  {renderResultValue(testExam.result[0].value)}
                </span>
                {renderResultUnit(testExam.result[0])}
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
                        {renderResultValue(res.value)}
                      </span>
                      {renderResultUnit(res)}
                    </p>
                  </div>
                </div>
              ) : null
            )}
        </div>
        <div className="flex flex-column">
          {renderRefString(testExam, testExam.refString)}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  patient: selectSelectedPatient,
});

export default connect(mapStateToProps)(StandardTestExam);
