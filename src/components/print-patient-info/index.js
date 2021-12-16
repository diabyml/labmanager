import React from "react";

import "./style.scss";

const Label = ({ children }) => <p className="fw-600"> {children} </p>;

function PrintPatientInfo({ patient, doctor }) {
  return (
    <div className="print-patient-info">
      <div className="border p-xs shadow-box ">
        {/* patient */}
        <Label>Nom: {patient.lastName.toUpperCase()}</Label>
        <Label>Prénom: {patient.firstName.toUpperCase()}</Label>
        <Label>Age: {patient.age} ans</Label>
        <Label>Patient N°: {patient.sampleNumber}</Label>
      </div>
      <div className="border p-xs shadow-box">
        {/* doctor */}
        <Label>Provenance: {doctor.provenance}</Label>
        <Label>Demandé par: {`${doctor.lastName} ${doctor.firstName}`}</Label>
        <Label>Pavillon: {doctor.pavillon}</Label>
      </div>
    </div>
  );
}

export default PrintPatientInfo;
