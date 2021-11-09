import React from "react";

function WidalTestExam({ testExam }) {
  return (
    <div>
      <p className="text--md mb-sm">{testExam.groupName.toUpperCase() + ":"}</p>
      <ul className="grid col-4 gap-sm">
        {testExam.result.map((res) => (
          <li key={res.id}>
            <div> {`${res.type}(${res.value})`} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidalTestExam;
