import React from "react";

import "./style.scss";

import { connect } from "react-redux";
import { selectSelectedPatient } from "../../redux/patient/patient.selectors";
import { createStructuredSelector } from "reselect";
import PrintHeader from "../../components/print-header";
import PrintPatientInfo from "../../components/print-patient-info";

import { categorize } from "../../utils/index";
import PrintCategoryHeader from "../../components/print-category-header";
import PrintResult from "../../components/print-result/index";

function PrintPage({ selectedPatient }) {
  const { firstName, lastName, age, sampleNumber } = selectedPatient;
  const {
    lastName: doctorLatName,
    pavillon,
    provenance,
  } = selectedPatient.doctor;
  // console.log(selectedPatient);

  // categorize patient tests exams for printing
  const categorizedData = categorize(selectedPatient.testExams);

  Object.keys(categorizedData).map((key) => console.log(categorizedData[key]));

  return (
    <div className="print-page component">
      <PrintHeader />
      <div className="mt-sm">
        <PrintPatientInfo
          patient={{ firstName, lastName, age, sampleNumber }}
          doctor={{ lastName: doctorLatName, pavillon, provenance }}
        />
      </div>

      {/* PRINTING TESTS BY CATEGORIES  */}
      {Object.keys(categorizedData).map((key) => (
        <div key={key}>
          <div className="mt-md">
            <div className="mb-sm">
              <PrintCategoryHeader key={key} name={key} showNorm={true} />
            </div>
            <div className="flow spacer-sm">
              {categorizedData[key].map((testExam) => (
                <div key={testExam.id}>
                  <PrintResult testExam={testExam} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  selectedPatient: selectSelectedPatient,
});

export default connect(mapStateToProps)(PrintPage);
