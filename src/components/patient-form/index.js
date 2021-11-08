import React from "react";
import Button from "../button";
import Input from "../input";
import Select from "../select";

import "./style.scss";

import { MdClose } from "react-icons/md";

import { v4 as uuidv4 } from "uuid";

// REDUX
import { connect } from "react-redux";
import { addPatient } from "../../redux/patient/patient.actions";
import ButtonIcon from "../button-icon";

function PatientForm(props) {
  const {
    patient,
    doctor,
    testExams,
    handleDeleteTestExam,
    doctorsOptions,
    selectedDoctor,
    handleSelectedDoctorChange,
    handlePatientChange,
    handleDoctorChange,
    handleResultValueChange,
    resetInfo,
    addPatient,
  } = props;

  let disabled =
    patient.firstName === "" ||
    patient.lastName === "" ||
    patient.sampleNumber === "";

  // ADD PATIENT
  const handleAddPatient = () => {
    addPatient({ ...patient, doctor, testExams });
    resetInfo();
  };

  return (
    <div className="patient-form height-full p-sm">
      <div className="form-container">
        <div>
          <form>
            <legend className="form-legend">Patient</legend>
            <div className="form-grid">
              <div>
                <Input
                  label="Nom"
                  labelFor="patientLastName"
                  placeholder="Nom"
                  value={patient.lastName}
                  name="lastName"
                  handler={handlePatientChange}
                />
              </div>
              <div>
                <Input
                  label="Prénom"
                  labelFor="patientFirstName"
                  placeholder="Prénom"
                  value={patient.firstName}
                  name="firstName"
                  handler={handlePatientChange}
                />
              </div>
              <div>
                <Input
                  label="N° Echantillon"
                  labelFor="patientSampleNumber"
                  placeholder="N° Echantillon"
                  value={patient.sampleNumber}
                  name="sampleNumber"
                  handler={handlePatientChange}
                />
              </div>
              <div>
                <Input
                  type="number"
                  label="Age"
                  labelFor="patientAge"
                  placeholder="Age"
                  value={patient.age}
                  name="age"
                  handler={handlePatientChange}
                />
              </div>
              <div>
                <Select
                  id="Patientgenre"
                  label="Selectionner Genre"
                  value={patient.genre}
                  name="genre"
                  handler={handlePatientChange}
                  options={[
                    { id: uuidv4(), value: "none", text: "Non défini" },
                    { id: uuidv4(), value: "Homme", text: "Homme" },
                    { id: uuidv4(), value: "Femme", text: "Femme" },
                  ]}
                />
              </div>
              <div>
                <Input
                  label="Identifiant"
                  labelFor="patientIdentifier"
                  placeholder="Identifiant"
                  value={patient.id}
                  name="id"
                  handler={handlePatientChange}
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <form>
            <legend className="form-legend">Médecin</legend>
            <div className="form-grid">
              <div>
                <Input
                  label="Nom"
                  labelFor="doctorLastName"
                  placeholder="Nom"
                  value={doctor.lastName}
                  name="lastName"
                  handler={handleDoctorChange}
                />
              </div>
              <div>
                <Input
                  label="Prénom"
                  labelFor="doctorFirstName"
                  placeholder="Prénom"
                  value={doctor.firstName}
                  name="firstName"
                  handler={handleDoctorChange}
                />
              </div>
              <div>
                <Input
                  label="Provenance"
                  labelFor="doctorProvenance"
                  placeholder="Provenance"
                  value={doctor.provenance}
                  name="provenance"
                  handler={handleDoctorChange}
                />
              </div>
              <div>
                <Input
                  label="Pavillon"
                  labelFor="doctorPavillon"
                  placeholder="Pavillon"
                  value={doctor.pavillon}
                  name="pavillon"
                  handler={handleDoctorChange}
                />
              </div>
              <div>
                <Select
                  id="selectedDoctor"
                  label="Selectionner Médecin"
                  value={selectedDoctor.id}
                  handler={handleSelectedDoctorChange}
                  options={doctorsOptions}
                />
              </div>
              <div className="flex items-end">
                <Button
                  type="button"
                  variant="primary"
                  disabled={disabled}
                  isWide
                  onClick={handleAddPatient}
                >
                  Ajouter
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <ul>
          {testExams.map(({ id: testId, name, result }) => (
            <li key={testId} className="test-exam-item  border-bottom-sm">
              <div className="flex items-center">
                <div
                  className="cursor-pointer mr-sm"
                  onClick={() => handleDeleteTestExam(testId)}
                >
                  <ButtonIcon Icon={MdClose} variant="accent" />
                </div>
                <strong>
                  <p> {name} </p>
                </strong>
              </div>
              <div>
                {result.map(({ id: resId, type, value }) => (
                  <div key={resId} className="flex items-center mb-sm">
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
          ))}
        </ul>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addPatient: (patient) => dispatch(addPatient(patient)),
});

export default connect(null, mapDispatchToProps)(PatientForm);
