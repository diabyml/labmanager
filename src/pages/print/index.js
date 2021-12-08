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

import moment from "moment";
import Button from "../../components/button/index";

function PrintPage({ selectedPatient }) {
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(undefined);
  const [showEntete, setShowEntete] = useState(true);
  const [isUsingCurrentDate, setIsUsingCurrentDate] = useState(false);
  // footer is the date and biologiste signature area
  const [showFooter, setShowFooter] = useState(true);
  // show nb or not
  const [showNb, setShowNb] = useState(true);
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
        {
          category: key,
          items: defaultCategories[key].map((item) => ({
            ...item,
            print: true,
          })),
          print: true,
        },
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

  const handleSingleTestExamOption = (e, category, testExamId) => {
    const { checked } = e.target;
    setCategorizedData((prev) =>
      prev.map((currentCategory) => {
        if (currentCategory === category) {
          return {
            ...currentCategory,
            items: currentCategory.items.map((item) =>
              item.id === testExamId ? { ...item, print: checked } : item
            ),
          };
        }
        return currentCategory;
      })
    );
    // console.log("expanded", expandedCategory);
  };

  const getFormatedDate = () => {
    const date = isUsingCurrentDate ? new Date() : selectedPatient.date;
    // const date = selectedPatient.date;
    // const month = date.getMonth() + 1;
    // const day = date.getDate().toString().padStart(2, "0");
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return moment(date).format("l");
  };

  return (
    <div className="print-page p-md">
      <div className="print-page__settings shadow-md">
        <Button
          variant="primary"
          onClick={() => setIsOptionsShown((prev) => !prev)}
        >
          Options
        </Button>
        {/* options dropdown menu */}
        {isOptionsShown && (
          <div className="options-menu">
            {/* HEADINGS */}
            <div className="print-page__options-headings p-md border-bottom-sm">
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
            </div>
            <div className="p-md border-bottom-sm">
              {categorizedData.map((category) => (
                <div key={category.category}>
                  {/* category */}
                  <div className="flex items-center justify-between py-sm">
                    <div className="mr-lg">
                      {/* to show Category name, I need to get the first element and show its category */}
                      {/* cause I am sure all element in that category will have the same category */}
                      <p
                        className="cursor-pointer"
                        onClick={() =>
                          setExpandedCategory((prev) =>
                            prev === category.category
                              ? undefined
                              : category.category
                          )
                        }
                      >
                        {category.category.slice(0, 4)}
                      </p>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        checked={category.print}
                        onChange={(e) =>
                          handleOptionsChange(e, category.category)
                        }
                      />
                    </div>
                  </div>
                  {expandedCategory === category.category && (
                    <div className="pl-sm">
                      {category.items.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <p className="mr-sm">{item.name}</p>
                          <input
                            type="checkbox"
                            checked={item.print}
                            onChange={(e) =>
                              handleSingleTestExamOption(e, category, item.id)
                            }
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-md">
              <div className="flex items-center justify-between py-sm">
                <div className="mr-lg">Afficher NB ?</div>
                <input
                  type="checkbox"
                  checked={showNb}
                  onChange={() => setShowNb((prev) => !prev)}
                />
              </div>
              <div className="flex items-center justify-between py-sm">
                <div className="mr-lg">Afficher Pied de Page ?</div>
                <input
                  type="checkbox"
                  checked={showFooter}
                  onChange={() => setShowFooter((prev) => !prev)}
                />
              </div>
              <div className="flex items-center justify-between py-sm">
                <div className="mr-lg">Date du Jour ?</div>
                <input
                  type="checkbox"
                  checked={isUsingCurrentDate}
                  onChange={() => setIsUsingCurrentDate((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        )}
        {/* settings container end */}
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
                    {category.items.map(
                      (testExam) =>
                        testExam.print && (
                          <div className="paper-content" key={testExam.id}>
                            <PrintResult testExam={testExam} />
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            )
        )}

        {/* PRINT NB */}
        <ul className="pt-lg">
          {showNb &&
            selectedPatient.nb.length > 0 &&
            selectedPatient.nb.map((nb) => (
              <div key={nb.id}>
                <p className="fw-600"> {`NB: ${nb.content}`} </p>
              </div>
            ))}
        </ul>

        {/* PRINT PAPER FOOTER */}
        <div className="print-page__paper-footer p-xs bg--accent">
          {/* Pied de Page */}
          {showFooter && (
            <div className="w-full grid col-2">
              <div>
                <p> {`Bamako ${getFormatedDate()}`} </p>
              </div>
              <div className="pl-xl">
                <p>Le Biologiste</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  selectedPatient: selectSelectedPatient,
});

export default connect(mapStateToProps)(PrintPage);
