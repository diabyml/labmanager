import React from "react";

import "./style.scss";

function PrintCategoryHeader({ name, showNorm }) {
  return (
    <div>
      <h2 className="text-center mb-sm">
        <strong>{name.toUpperCase()}</strong>
      </h2>
      <div className="border px-md py-xs radius-lg">
        <div className="grid col-3">
          <div>
            <p className="font-bold">ANALYSES</p>
          </div>
          <div className="flex justify-center">
            <p className="font-bold">RESULTATS</p>
          </div>
          <div className="flex justify-end">
            {showNorm && <p className="font-bold"> NORMES </p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintCategoryHeader;
