import React, { useState } from "react";
import PatientForm from "../../components/patient-form";
import TestExamList from "../../components/test-exam-list";

import "./style.scss";

import { changeResultValue } from "../../utils";

import { v4 as uuidv4 } from "uuid";

import { connect } from "react-redux";
import { selectDoctors } from "../../redux/doctor/doctor.selectors";
import { createStructuredSelector } from "reselect";
import { useEffect } from "react";

function NewPatientPage({ doctors }) {
  const date = new Date().getDay() + "";
  const dateStr = `0/${date.padStart(2, "0")}`;
  const [patient, setPatient] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    age: "",
    sampleNumber: dateStr,
    genre: "",
    date: new Date(),
    nb: [],
  });

  const [doctor, setDoctor] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    provenance: "",
    pavillon: "",
  });

  const [testExams, setTestExams] = useState([]);

  const [selectedDoctor, setSelectedDoctor] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    provenance: "",
    pavillon: "",
  });

  useEffect(() => {
    // effect to fill doctors field when selected doctor changes
    if (selectedDoctor.lastName) {
    }
    const { firstName, lastName, provenance, pavillon } = selectedDoctor;
    setDoctor((prev) => ({
      ...prev,
      firstName,
      lastName,
      provenance,
      pavillon,
    }));
    return () => {
      // cleanup
    };
  }, [selectedDoctor]);

  // DOCTORS OPTIONS optimized for select input
  const doctorFormatedOptions = doctors.map(({ id, lastName }) => ({
    id: id,
    value: id,
    text: lastName,
  }));

  const noneId = uuidv4();
  const doctorOptions = [
    {
      id: noneId,
      value: noneId,
      text: "Non defini",
      firstName: "",
      lastName: "",
      provenance: "",
      pavillon: "",
    },
    ...doctorFormatedOptions,
  ];

  const handlePatientChange = (event) => {
    const { name, value } = event.target;
    setPatient((prev) => ({ ...prev, [name]: value }));
  };

  const handlePatientDateChange = (date) => {
    setPatient((prev) => ({ ...prev, date: date }));
  };

  const handleDoctorChange = (event) => {
    const { name, value } = event.target;
    setDoctor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectedDoctorChange = (event) => {
    let doctor = {
      id: noneId,
      value: noneId,
      text: "Non defini",
      firstName: "",
      lastName: "",
      provenance: "",
      pavillon: "",
    };

    const { value } = event.target;

    if (noneId !== value) {
      doctor = doctors.find(({ id }) => id === value);
    }
    setSelectedDoctor(doctor);
  };

  // add new test to patient testExams
  const addTestExam = (source, newTestExam) => {
    const exists = source.find(({ id }) => id === newTestExam.id);

    if (!exists) {
      return [...source, newTestExam];
    }

    return source;
  };

  const handleResultValueChange = (event, testId, resId) => {
    const { value: newValue } = event.target;
    setTestExams((source) =>
      changeResultValue(source, testId, resId, newValue)
    );
  };

  const handleAddTestExam = (newTestExam) => {
    setTestExams((prev) => addTestExam(prev, newTestExam));
  };

  const handleDeleteTestExam = (testExamID) => {
    setTestExams((prev) => prev.filter(({ id }) => id !== testExamID));
  };

  const resetInfo = () => {
    const date = new Date().getDay() + "";
    setPatient({
      id: uuidv4(),
      firstName: "",
      lastName: "",
      age: "",
      sampleNumber: `0/${date.padStart(2, "0")}`,
      genre: "",
      date: Date.now(),
    });

    setDoctor({
      id: uuidv4(),
      firstName: "",
      lastName: "",
      provenance: "",
      pavillon: "",
    });

    setTestExams([]);
  };

  return (
    <div className="new-patient-page component height-full">
      <div className="container height-full">
        <div className="left height-full overflow-y-scroll pl-xs">
          <PatientForm
            handlePatientChange={handlePatientChange}
            handleDoctorChange={handleDoctorChange}
            patient={patient}
            doctor={doctor}
            testExams={testExams}
            handleDeleteTestExam={handleDeleteTestExam}
            doctorsOptions={doctorOptions}
            selectedDoctor={selectedDoctor}
            handleSelectedDoctorChange={handleSelectedDoctorChange}
            handleResultValueChange={handleResultValueChange}
            handlePatientDateChange={handlePatientDateChange}
            resetInfo={resetInfo}
          />
        </div>
        <div className="right height-full overflow-y-scroll-hidden shadow-xl radius-lg py-md pr-md">
          <TestExamList handleAddTestExam={handleAddTestExam} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  doctors: selectDoctors,
});

export default connect(mapStateToProps)(NewPatientPage);
