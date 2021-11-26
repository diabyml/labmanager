import React from "react";
import { validateResult } from "../../utils";

import "./style.scss";

// redux
import { connect } from "react-redux";
import { selectSelectedPatient } from "../../redux/patient/patient.selectors";
import { createStructuredSelector } from "reselect";

function StandardTestExam({ testExam, patient }) {
  // console.log("Test exam", testExam);

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
                <p className="fw-semi-bold text--xs"> {testExam.fullName} </p>
              )}
            </div>
            <div className="flex pl-md">
              <p
                className={`align-self-start ${
                  !validateResult(
                    testExam.result[0],
                    patient.genre,
                    patient.age
                  ) && "bg--invalid px-xs"
                }`}
              >
                {testExam.result[0].value}
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
                      className={`align-self-start ${
                        !validateResult(res, patient.genre, patient.age) &&
                        "bg--invalid px-xs"
                      }`}
                    >
                      {res.value}
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

const mapStateToProps = createStructuredSelector({
  patient: selectSelectedPatient,
});

export default connect(mapStateToProps)(StandardTestExam);
