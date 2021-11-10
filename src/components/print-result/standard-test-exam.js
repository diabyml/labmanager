import React from "react";

import "./style.scss";

function StandardTestExam({ testExam }) {
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
                <p className="font-bold text--xs"> {testExam.fullName} </p>
              )}
            </div>
            <div className="flex pl-md">
              <p>{testExam.result[0].value}</p>
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
                    <p>{res.value}</p>
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

export default StandardTestExam;
