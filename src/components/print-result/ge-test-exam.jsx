import React from "react";
import { validateResult } from "../../utils";

// redux
import { connect } from "react-redux";
import { selectSelectedPatient } from "../../redux/patient/patient.selectors";
import { createStructuredSelector } from "reselect";

function GeTestExam({ testExam, patient }) {
  const isValid = validateResult(
    testExam.result[0],
    patient.genre,
    patient.age
  );
  const resultValue = testExam.result[0].value;
  return (
    <div className="grid col-3">
      <div>
        <p> {testExam.name} </p>
      </div>
      <div className="pl-md ">
        <p className={`${!isValid && "bg--invalid px-xxs"}`}>
          {isValid ? (
            <> {resultValue} </>
          ) : (
            <>
              {" "}
              {`Positive (${resultValue} ${testExam.result[0].unit}`}
              <sup>3</sup>
              {")"}{" "}
            </>
          )}
        </p>
      </div>
      <div></div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  patient: selectSelectedPatient,
});

export default connect(mapStateToProps)(GeTestExam);
