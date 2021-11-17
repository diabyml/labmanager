import React from "react";

import "./style.scss";

const Label = ({ children }) => <p className="fw-medium"> {children} </p>;

function PrintPatientInfo({ patient, doctor }) {
  return (
    <div className="print-patient-info">
      <div className="border p-xs shadow-box ">
        {/* patient */}
        <Label>Nom: {patient.lastName}</Label>
        <Label>Prénom: {patient.firstName}</Label>
        <Label>Age: {patient.age} ans</Label>
        <Label>N° Echantillon: {patient.sampleNumber}</Label>
      </div>
      <div className="border p-xs shadow-box">
        {/* doctor */}
        <Label>Provenance: {doctor.provenance}</Label>
        <Label>Demandé par: {doctor.lastName}</Label>
        <Label>Pavillon: {doctor.pavillon}</Label>
      </div>
    </div>
  );
}

export default PrintPatientInfo;
