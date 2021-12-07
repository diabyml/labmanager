import React from "react";

import { validateResult } from "../../utils";

function WidalTestExam({ testExam }) {
  return (
    <div>
      <p className="text--md mb-sm">{testExam.groupName.toUpperCase() + ":"}</p>
      <ul className="grid col-4 gap-sm">
        {testExam.result.map((res) => (
          <li key={res.id}>
            <div>
              <p>
                <span>{res.type}</span>
                <span> {"("} </span>
                <span
                  className={`${
                    !validateResult({
                      refSign: res.refSign,
                      value: res.value,
                    }) && "bg--invalid px-xxs"
                  }`}
                >
                  {res.value}
                </span>
                <span> {")"} </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidalTestExam;
