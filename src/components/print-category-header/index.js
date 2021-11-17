import React from "react";
import { categories } from "../../constants/categories";

import "./style.scss";

function PrintCategoryHeader({ name, showNorm }) {
  return (
    <div>
      <h2 className="text-center mb-sm">
        <strong>{name.toUpperCase()}</strong>
      </h2>
      {name === categories.IMMUNOPHENOTYPAGE && (
        <div className="flex flex-column items-center flow spacer-sm mb-sm">
          <p>(Méthode Fluorescence CD4)</p>
          <p>Linéarité : 50-4000 cellules/ul</p>
        </div>
      )}
      <div className="border px-md py-xs radius-lg">
        <div className="grid col-3">
          <div>
            <p className="fw-semi-bold">ANALYSES</p>
          </div>
          <div className="flex pl-md">
            <p className="fw-semi-bold">RESULTATS</p>
          </div>
          <div className="flex">
            {showNorm && <p className="fw-semi-bold"> NORMES </p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintCategoryHeader;
