import React from "react";

import "./style.scss";
import ButtonIcon from "../button-icon/index";
import { MdClose } from "react-icons/md";

import { connect } from "react-redux";

import { selectTestExams } from "../../redux/test-exam/test-exam.selectors";
import { selectSelectedPatient } from "../../redux/patient/patient.selectors";

import {
  addPatientTestExam,
  deletePatientTestExam,
} from "../../redux/patient/patient.actions";

import { createStructuredSelector } from "reselect";

import TestExamList from "../test-exam-list/index";

function DialogBox({
  onToggle,
  testExams,
  selectedPatient,
  deletePatientTestExam,
  addPatientTestExam,
}) {
  const handleAddTestExam = (testExam) => {
    // add test to selected patient test exams
    const found = selectedPatient.testExams.find(
      ({ id }) => id === testExam.id
    );

    if (!found) {
      addPatientTestExam(selectedPatient.id, testExam);
    }
  };

  const handleDeleteTestExam = (id) => {
    // delete test exam in selected user testExams
    deletePatientTestExam(selectedPatient.id, id);
  };

  return (
    <>
      <div
        className="overlay bg--overlay cursor-pointer"
        onClick={onToggle}
      ></div>
      <div className="dialog-box overflow-y-scroll-hidden component pt-xl bg--white shadow-lg border-gray grid col-2">
        <div className="close-container">
          <ButtonIcon variant={"accent"} Icon={MdClose} onClick={onToggle} />
        </div>
        <div className="overflow-y-scroll p-md">
          <ul>
            {selectedPatient.testExams.map(({ id, name }) => (
              <li key={id} className="test-exam-item py-sm  border-bottom-sm">
                <div className="flex items-center">
                  <div className="cursor-pointer mr-sm">
                    <ButtonIcon
                      Icon={MdClose}
                      variant="accent"
                      onClick={() => handleDeleteTestExam(id)}
                    />
                  </div>
                  <strong>
                    <p> {name} </p>
                  </strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-y-scroll p-md">
          <TestExamList
            testExams={testExams}
            handleAddTestExam={handleAddTestExam}
          />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  testExams: selectTestExams,
  selectedPatient: selectSelectedPatient,
});

const mapDispatchToProps = (dispatch) => ({
  addPatientTestExam: (patientId, testExam) =>
    dispatch(addPatientTestExam(patientId, testExam)),
  deletePatientTestExam: (patientId, testExamId) =>
    dispatch(deletePatientTestExam(patientId, testExamId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
