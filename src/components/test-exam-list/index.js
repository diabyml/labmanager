import React, { useState } from "react";

import "./style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTestExams } from "../../redux/test-exam/test-exam.selectors";
import SearchBox from "../search-box";

function TestExamList({ testExams, handleAddTestExam }) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) =>
    setQuery(event.target.value.toLowerCase());

  return (
    <div className="test-exams-list height-full">
      <div className="py-md pl-sm mb-md text-center">
        <div className="search-container">
          <SearchBox handler={handleQueryChange} placeholder="Rechercher" />
        </div>
      </div>
      <ul className="test-exams height-full overflow-y-scroll">
        {testExams
          .filter((el) => el.name.toLowerCase().includes(query))
          .map((testExam) => (
            <li
              key={testExam.id}
              className="p-sm border-bottom-sm cursor-pointer"
              onClick={() => handleAddTestExam(testExam)}
            >
              <div>
                <strong>
                  <p className="text--lg">{testExam.name}</p>
                </strong>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  testExams: selectTestExams,
});

export default connect(mapStateToProps)(TestExamList);
