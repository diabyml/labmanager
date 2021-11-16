import React, { useState } from "react";

import "./style.scss";

import { v4 as uuidv4 } from "uuid";

import Button from "../../components/button";

import { FiMoreVertical } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import {
  selectCurrentPatients,
  selectSelectedPatient,
} from "../../redux/patient/patient.selectors";
import {
  updatePatientInfo,
  updatePatientDoctorInfo,
  updatePatientResult,
  setSelectedPatientId,
  deletePatient,
  deletePatientTestExam,
} from "../../redux/patient/patient.actions";
import { createStructuredSelector } from "reselect";
import Input from "../../components/input";
import Select from "../../components/select";
import ButtonIcon from "../../components/button-icon/index";
import ROUTES from "../../seed/routes";
import DialogBox from "../../components/dialog";

function PatientsPage({
  currentPatients,
  selectedPatient,
  setSelectedPatientId,
  updatePatientInfo,
  updatePatientDoctorInfo,
  updatePatientResult,
  deletePatient,
  deletePatientTestExam,
}) {
  const [isDropDownMenuShown, setIsDropDownMenuShown] = useState(false);
  const [isDialogShown, setIsDialogShown] = useState(false);
  const history = useHistory();

  const handleDropDownMenuStateChange = () => {
    setIsDropDownMenuShown((prev) => !prev);
  };

  // dropdown actions
  const handleDeletePatient = (patientId) => {
    deletePatient(patientId);
    handleDropDownMenuStateChange();
  };

  const handleToggleDialog = () => setIsDialogShown((prev) => !prev);

  const handlePrintPatient = () => {
    history.push(ROUTES.print);
    handleDropDownMenuStateChange();
  };

  const handlePatientClick = (patient) => {
    // setSelectedPatient(patient);
    setSelectedPatientId(patient.id);
    setIsDropDownMenuShown(false);
  };

  const handlePatientInfoChange = (event) => {
    const { name, value } = event.target;
    updatePatientInfo(selectedPatient.id, name, value);
  };

  const handlePatientDoctorInfoChange = (e) => {
    const { name, value } = e.target;
    updatePatientDoctorInfo(selectedPatient.id, name, value);
  };

  const handleResultValueChange = (e, testId, resId) => {
    // update result value
    const { value: newValue } = e.target;
    updatePatientResult(selectedPatient.id, testId, resId, newValue);
  };

  return (
    <>
      {isDialogShown && <DialogBox onToggle={handleToggleDialog} />}
      <div className="component patients-page height-full">
        <header className="flex justify-between pb-sm">
          <h2 className="text--md font-bold">Patients du jour</h2>
          <Button variant="primary">Sauvegarder Patients</Button>
        </header>
        <div className="container">
          <div className="left p-sm  overflow-y-scroll">
            <ul className="patient-row font-bold text-sm border-bottom-sm pb-sm">
              <li>N° Echantillon</li>
              <li>Nom</li>
              {/* <li>Médecin</li> */}
            </ul>
            <ul>
              {currentPatients.map((patient) => (
                <li
                  key={patient.id}
                  className={`patient-row font-regular border-bottom-sm py-sm cursor-pointer ${
                    selectedPatient &&
                    selectedPatient.id === patient.id &&
                    `bg--light`
                  } `}
                >
                  <div>
                    <strong>
                      <p>{patient.sampleNumber}</p>
                    </strong>
                  </div>
                  <div onClick={() => handlePatientClick(patient)}>
                    <p> {`${patient.firstName} ${patient.lastName}`} </p>
                  </div>
                  <div className="menu-container flex justify-end">
                    <FiMoreVertical
                      className="more-icon"
                      onClick={() =>
                        selectedPatient?.id === patient.id &&
                        handleDropDownMenuStateChange()
                      }
                      style={{ width: "20px", height: "20px" }}
                    />
                    {isDropDownMenuShown && selectedPatient.id === patient.id && (
                      <div className="dropdown-menu">
                        <ul>
                          <li onClick={handlePrintPatient}>Imprimer</li>
                          <li
                            onClick={() =>
                              handleDeletePatient(selectedPatient.id)
                            }
                          >
                            Effacer
                          </li>
                          <li>Archiver</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="right p-sm overflow-y-scroll">
            {selectedPatient ? (
              <div>
                <header className="grid col-2 gap-sm">
                  <div className="left">
                    <legend className="form-legend">Patient</legend>
                    <div className="grid col-2 gap-sm">
                      <Input
                        label="Nom"
                        labelFor="patientLastName"
                        placeholder="Nom"
                        name="lastName"
                        handler={handlePatientInfoChange}
                        value={selectedPatient.lastName}
                      />
                      <Input
                        label="Prénom"
                        labelFor="patientFirstName"
                        placeholder="Prénom"
                        name="firstName"
                        handler={handlePatientInfoChange}
                        value={selectedPatient.firstName}
                      />
                      <Input
                        label="N° Echantillon"
                        labelFor="patientSampleNumber"
                        placeholder="N° Echantillon"
                        name="sampleNumber"
                        handler={handlePatientInfoChange}
                        value={selectedPatient.sampleNumber}
                      />
                      <Input
                        type="number"
                        label="Age"
                        labelFor="patientAge"
                        placeholder="Age"
                        name="age"
                        handler={handlePatientInfoChange}
                        value={selectedPatient.age}
                      />
                      <Select
                        id="Patientgenre"
                        label="Selectionner Genre"
                        value={selectedPatient.genre}
                        name="genre"
                        handler={handlePatientInfoChange}
                        options={[
                          { id: uuidv4(), value: "none", text: "Non défini" },
                          { id: uuidv4(), value: "Homme", text: "Homme" },
                          { id: uuidv4(), value: "Femme", text: "Femme" },
                        ]}
                      />
                      <div className="flex items-end">
                        <Button
                          variant={"primary"}
                          isWide
                          onClick={handleToggleDialog}
                        >
                          Ajouter Examen
                        </Button>
                      </div>
                      {/* <Input
                      label="Identifiant"
                      labelFor="patientIdentifier"
                      placeholder="Identifiant"
                      name="id"
                      handler={handlePatientInfoChange}
                      value={selectedPatient.id}
                    /> */}
                    </div>
                  </div>
                  <div className="right">
                    <legend className="form-legend">Médecin</legend>
                    <div className="grid col-2 gap-sm">
                      <Input
                        label="Nom"
                        labelFor="doctorLastName"
                        placeholder="Nom"
                        value={selectedPatient.doctor.lastName}
                        name="lastName"
                        handler={handlePatientDoctorInfoChange}
                      />
                      <Input
                        label="Prénom"
                        labelFor="doctorFirstName"
                        placeholder="Prénom"
                        value={selectedPatient.doctor.firstName}
                        name="firstName"
                        handler={handlePatientDoctorInfoChange}
                      />
                      <Input
                        label="Provenance"
                        labelFor="doctorProvenance"
                        placeholder="Provenance"
                        value={selectedPatient.doctor.provenance}
                        name="provenance"
                        handler={handlePatientDoctorInfoChange}
                      />
                      <Input
                        label="Pavillon"
                        labelFor="doctorPavillon"
                        placeholder="Pavillon"
                        value={selectedPatient.doctor.pavillon}
                        name="pavillon"
                        handler={handlePatientDoctorInfoChange}
                      />
                    </div>
                  </div>
                </header>
                <ul className="mt-lg">
                  {selectedPatient.testExams.map(
                    ({ id: testId, name, result }) => (
                      <li
                        key={testId}
                        className="grid col-2 gap-md p-sm border-bottom-sm"
                      >
                        <div className="flex items-center">
                          <div className="mr-sm">
                            <ButtonIcon
                              variant={"accent"}
                              Icon={MdClose}
                              type="button"
                              onClick={() =>
                                deletePatientTestExam(
                                  selectedPatient.id,
                                  testId
                                )
                              }
                            />
                          </div>
                          <strong>
                            <p> {name} </p>
                          </strong>
                        </div>
                        <div>
                          {result.map(({ id: resId, type, value }) => (
                            <div
                              key={resId}
                              className="flex items-center mb-sm"
                            >
                              <div className="flex-basis-100">
                                <strong>
                                  <p> {type} </p>
                                </strong>
                              </div>
                              <div className="flex-basis-100">
                                <Input
                                  value={value}
                                  onChange={(e) =>
                                    handleResultValueChange(e, testId, resId)
                                  }
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : (
              <div className="height-full flex flex-center">
                <p className="text--xl font-regular opacity-6">
                  Selectionner un patient pour modifier
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentPatients: selectCurrentPatients,
  selectedPatient: selectSelectedPatient,
});

const mapDispatchToProps = (dispatch) => ({
  updatePatientInfo: (patientId, name, value) =>
    dispatch(updatePatientInfo(patientId, name, value)),
  updatePatientDoctorInfo: (patientId, name, value) =>
    dispatch(updatePatientDoctorInfo(patientId, name, value)),
  updatePatientResult: (patientId, testId, resId, newValue) =>
    dispatch(updatePatientResult(patientId, testId, resId, newValue)),
  deletePatient: (patientId) => dispatch(deletePatient(patientId)),
  deletePatientTestExam: (patientId, testExamId) =>
    dispatch(deletePatientTestExam(patientId, testExamId)),
  setSelectedPatientId: (id) => dispatch(setSelectedPatientId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientsPage);
