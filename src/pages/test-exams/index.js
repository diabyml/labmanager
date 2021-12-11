import React, { useState } from "react";

import { connect } from "react-redux";
import { selectTestExams } from "../../redux/test-exam/test-exam.selectors";
import { createStructuredSelector } from "reselect";
import SearchBox from "../../components/search-box/index";
import { TEST_EXAM_TYPES } from "../../constants/test-exam-type";

function TestExamsPage({ testExams }) {
  const [query, setQuery] = useState("");

  const queryChangeHandler = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const renderRefString = (testExam) => {
    switch (testExam.type) {
      case TEST_EXAM_TYPES.MULTI_PARAM:
        return (
          <>
            {testExam.result.map((result) => (
              <div key={result.id}>
                <div className="mb-sm">{`${result.type}:`}</div>
                <div className="pl-md mb-md">
                  {result.refString.map((r, index) => (
                    <div key={index}> {r} </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        );
      default:
        return (
          <>
            {testExam.refString.map((r, index) => (
              <div key={index}> {r} </div>
            ))}
          </>
        );
    }
  };

  return (
    <div className="component height-full">
      <div style={{ width: "300px" }}>
        <SearchBox placeholder="Rechercher..." handler={queryChangeHandler} />
      </div>
      <div className="py-md height-full overflow-y-scroll">
        <table className="p-md font-bold">
          <thead className="text--lg">
            <tr>
              <th>Nom de l'examen</th>
              <th> Catégorie </th>
              <th>Valeurs de Référence</th>
            </tr>
          </thead>
          <tbody className="text--md">
            {testExams
              .filter((t) => t.name.toLowerCase().includes(query))
              .map((t) => (
                <tr key={t.id}>
                  <td> {t.name} </td>
                  <td> {t.category} </td>
                  <td>{renderRefString(t)}</td>
                </tr>
              ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  testExams: selectTestExams,
});

export default connect(mapStateToProps)(TestExamsPage);
