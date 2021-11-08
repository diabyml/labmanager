import React from "react";

import "./style.scss";

function PrintHeader() {
  return (
    <div className="print-header">
      <div className="opacity-6">
        <div className="circle p-md ">
          <h4 className="text-center font-bold">LABORATOIRE D'ANALYSE</h4>
          <p className="text-center my-xs">
            Clinique Médicale Déclic Santé Sis à Medina Coura
          </p>
          <p className="text-center">
            Rue : 01 Porte : N°28 TEL : 92 90 69 64/ 67 73 73 50
          </p>
        </div>
        <h4 className="text-center font-bold mt-xxs">FICHE DE RESULTAT</h4>
      </div>
    </div>
  );
}

export default PrintHeader;
