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
// import CustomDialog from "../../components/custom-dialog";
// import Input from "../../components/input/index";

function PrintPage({ selectedPatient }) {
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(undefined);
  const [showEntete, setShowEntete] = useState(true);
  const [isUsingCurrentDate, setIsUsingCurrentDate] = useState(false);
  const [changeDateMarginBy, setChangeDateMarginBy] = useState(16);
  const [changeNbMarginBy, setChangeNbMarginBy] = useState(16);
  // const [isRefDialogShown, setIsRefDialogShown] = useState(false);
  // footer is the date and biologiste signature area
  const [showFooter, setShowFooter] = useState(true);

  // const onOpenRefDialog = () => {
  //   setIsRefDialogShown(true);
  // };

  // const onCloseRefDialog = () => {
  //   setIsRefDialogShown(false);
  // };

  // show nb or not
  const [showNb, setShowNb] = useState(true);
  const { firstName, lastName, age, sampleNumber } = selectedPatient;
  const {
    lastName: doctorLatName,
    firstName: doctorFirstName,
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
          showNorm: true,
        },
      ];
    });
    return formatedCategories;
  };

  // console.log(getCategories());

  const [categorizedData, setCategorizedData] = useState(getCategories());
  console.log("categories", categorizedData);

  // show category norme change
  const categoryShowNormChangeHandler = (e, category) => {
    // console.log("event value:", e.target.checked);
    // console.log("category:", category.category);
    setCategorizedData((prev) =>
      prev.map((c) => {
        if (c.category === category)
          return { ...c, showNorm: e.target.checked };
        else return c;
      })
    );
  };

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

  // ref value change handlers
  // const onRefValueChangeHandler = (e, category, itemId, refIndex) => {
  //   const { value } = e.target;
  //   setCategorizedData((prev) =>
  //     prev.map((c) => {
  //       if (c.category === category) {
  //         return {
  //           ...c,
  //           items: c.items.map( item => {
  //             if (item.id === itemId) {
  //               return {
  //                 ...item,
  //                 refString:
  //               }
  //             }
  //             return item;
  //           } )
  //         }
  //       }
  //       return category;
  //     })
  //   );
  // };

  const getFormatedDate = () => {
    const date = isUsingCurrentDate ? new Date() : selectedPatient.date;
    const dateStr = moment(date).format("l");
    const monthDayYear = dateStr.split("/");
    return `le ${monthDayYear[1]}/${monthDayYear[0]}/${monthDayYear[2]}`;
  };

  return (
    <>
      <div className="print-page p-md">
        <div className="print-page__settings shadow-md">
          <div className="flex">
            <div className="">
              <Button
                variant="primary"
                onClick={() => setIsOptionsShown((prev) => !prev)}
              >
                Options
              </Button>
            </div>
            <div>
              {/* <Button variant="primary" onClick={onOpenRefDialog}>
                Valeurs Ref
              </Button> */}
            </div>
          </div>

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
                        {/* SHOW NORM LOGIC GOES HERE */}
                        <div className="flex items-center justify-between">
                          <p className=""> Afficher Norme </p>
                          <div>
                            <input
                              type="checkbox"
                              checked={category.showNorm}
                              onChange={(e) =>
                                categoryShowNormChangeHandler(
                                  e,
                                  category.category
                                )
                              }
                            />
                          </div>
                        </div>
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
                doctor={{
                  firstName: doctorFirstName,
                  lastName: doctorLatName,
                  pavillon,
                  provenance,
                }}
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
                        showNorm={category.showNorm}
                      />
                    </div>
                    <div>
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
          <ul
            className="print-page__paper-nb pos-rel"
            style={{ marginTop: `${changeNbMarginBy}px` }}
          >
            {showNb && (
              <div>
                <div
                  className="flex items-center print-hidden"
                  style={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    right: "0",
                  }}
                >
                  <div>
                    <input
                      value={changeNbMarginBy}
                      className="text--sm"
                      onChange={(e) => {
                        const { value } = e.target;
                        if (value && value <= 200) {
                          setChangeNbMarginBy(value);
                        } else {
                          setChangeNbMarginBy("");
                        }
                      }}
                      style={{ width: "40px", height: "18px" }}
                    />
                  </div>
                </div>
              </div>
            )}
            {showNb &&
              selectedPatient.nb.length > 0 &&
              selectedPatient.nb.map((nb) => (
                <div key={nb.id}>
                  <p className="fw-600"> {`NB: ${nb.content}`} </p>
                </div>
              ))}
          </ul>

          {/* date */}
          {showFooter && (
            <div
              className="date-container w-full grid col-2"
              style={{
                position: "relative",
                marginTop: `${changeDateMarginBy}px`,
              }}
            >
              <div>
                <p> {`Bamako ${getFormatedDate()}`} </p>
              </div>
              <div className="flex items-center justify-center">
                <p>Le Biologiste</p>
              </div>
              {/* change date margin logic container */}
              <div
                className="flex items-center print-hidden"
                style={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  right: "0",
                }}
              >
                <div>
                  <input
                    type="text"
                    value={changeDateMarginBy}
                    className="text--sm"
                    onChange={(e) => {
                      const { value } = e.target;
                      if (value && value <= 200) {
                        setChangeDateMarginBy(value);
                      } else {
                        setChangeDateMarginBy("");
                      }
                    }}
                    style={{ width: "50px", height: "18px" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* PRINT PAPER FOOTER */}
          <div className="print-page__paper-footer p-xs bg--accent">
            {/* Pied de Page */}
            <div className="print-hidden" style={{ color: "black" }}>
              Fin de la page
            </div>
          </div>
        </div>
      </div>

      {/* Change ref dialog */}
      {/* {isRefDialogShown && (
        <CustomDialog onClose={onCloseRefDialog}>
          <div>
            {categorizedData.map((category, categoryIndex) => {
              return (
                <div key={categoryIndex}>
                  {category.items.map((item) => {
                    return (
                      // row = itemName ---- itemRefs
                      <div key={item.id}>
                        <div
                          key={item.name}
                          className="border-bottom-sm pb-sm grid col-2 text--md"
                        >
                          <div className="flex items-center">
                            <p>{item.name}</p>
                          </div>
                          <div>
                            {item.refString.map((ref, refIndex) => {
                              return (
                                <div key={refIndex} className="">
                                  <Input
                                    value={ref}
                                    onChange={(e) =>
                                      onRefValueChangeHandler(
                                        e,
                                        category.category,
                                        item.id,
                                        refIndex
                                      )
                                    }
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </CustomDialog>
      )} */}
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  selectedPatient: selectSelectedPatient,
});

export default connect(mapStateToProps)(PrintPage);
