import React, { useState } from "react";

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
  const [showEntete, setShowEntete] = useState(true);
  const [isUsingCurrentDate, setIsUsingCurrentDate] = useState(false);
  const { firstName, lastName, age, sampleNumber } = selectedPatient;
  const {
    lastName: doctorLatName,
    pavillon,
    provenance,
  } = selectedPatient.doctor;
  // console.log(selectedPatient);

  // categorize patient tests exams for printing
  const defaultCategories = categorize(selectedPatient.testExams);
  const getCategories = () => {
    let formatedCategories = [];
    Object.keys(defaultCategories).forEach((key) => {
      formatedCategories = [
        ...formatedCategories,
        { category: key, items: defaultCategories[key], print: true },
      ];
    });
    return formatedCategories;
  };

  // console.log(getCategories());

  const [categorizedData, setCategorizedData] = useState(getCategories());
  // console.log("categories", categorizedData);

  const handleOptionsChange = (e, category) => {
    const { checked } = e.target;
    setCategorizedData((prev) =>
      prev.map((item) => {
        if (item.category === category) return { ...item, print: checked };
        return item;
      })
    );
    // console.log("checked", checked);
    // console.log(category);
  };

  const getFormatedDate = () => {
    const date = isUsingCurrentDate ? new Date() : selectedPatient.date;
    const month = date.getMonth() + 1;
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="print-page p-md">
      <div className="print-page__settings mt-md ml-md shadow-md p-md">
        <h2 className="text--md font-bold">Options</h2>
        <div className="flex items-center justify-between py-sm">
          <p className="mr-lg"> Entête </p>
          <div>
            <input
              type="checkbox"
              checked={showEntete}
              onChange={() => setShowEntete((prev) => !prev)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between py-sm">
          <div className="mr-lg">Changer Date</div>
          <input
            type="checkbox"
            checked={isUsingCurrentDate}
            onChange={() => setIsUsingCurrentDate((prev) => !prev)}
          />
        </div>
        {categorizedData.map((category) => (
          <div
            key={category.category}
            className="flex items-center justify-between py-sm"
          >
            <div className="mr-lg">
              {/* to show Category name, I need to get the first element and show its category */}
              {/* cause I am sure all element in that category will have the same category */}
              <p>{category.category.slice(0, 4)}</p>
            </div>
            <div>
              <input
                type="checkbox"
                checked={category.print}
                onChange={(e) => handleOptionsChange(e, category.category)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="print-page__paper component">
        <PrintHeader />
        <div className="mt-sm">
          {showEntete && (
            <PrintPatientInfo
              patient={{ firstName, lastName, age, sampleNumber }}
              doctor={{ lastName: doctorLatName, pavillon, provenance }}
            />
          )}
        </div>
        {/* PRINTING TESTS BY CATEGORIES  */}
        {categorizedData.map(
          (category) =>
            category.print && (
              <div key={category.category}>
                <div className="mt-md">
                  <div className="mb-sm">
                    <PrintCategoryHeader
                      key={category.category}
                      name={category.category}
                      showNorm={true}
                    />
                  </div>
                  <div className="flow spacer-sm">
                    {category.items.map((testExam) => (
                      <div key={testExam.id}>
                        <PrintResult testExam={testExam} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
        )}
        {/* PRINT PAPER FOOTER */}
        <div className="print-page__paper-footer">
          <div className="mb-md">
            {selectedPatient.doctor.nb && (
              <p className="fw-medium">{`NB: ${selectedPatient.doctor.nb}`} </p>
            )}
          </div>
          <div className="w-full flex justify-between">
            <div>
              <p> {getFormatedDate()} </p>
            </div>
            <div>
              <p>Le Biologiste</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  selectedPatient: selectSelectedPatient,
});

export default connect(mapStateToProps)(PrintPage);
