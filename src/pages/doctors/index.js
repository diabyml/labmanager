import React, { useState } from "react";
import "./styles.scss";
import SearchBox from "../../components/search-box/index";

import { v4 as uuidv4 } from "uuid";

import { connect } from "react-redux";
import {
  selectDoctors,
  selectSelectedDoctor,
} from "../../redux/doctor/doctor.selectors";
import {
  setSelectedDoctorId,
  addNewDoctor,
  deleteDoctor,
  updateDoctor,
} from "../../redux/doctor/doctor.actions";
import { createStructuredSelector } from "reselect";
import Input from "../../components/input";
import Button from "../../components/button/index";
import ButtonIcon from "../../components/button-icon/index";
import { MdClose } from "react-icons/md";

function DoctorsPage({
  doctors,
  addNewDoctor,
  updateDoctor,
  deleteDoctor,
  setSelectedDoctorId,
  selectedDoctor,
}) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const addNewDoctorHandler = () => {
    const newDoctor = {
      id: uuidv4(),
      firstName: "",
      lastName: "nouveau médecin",
      provenance: "Non defini",
      pavillon: "",
    };

    addNewDoctor(newDoctor);
    setSelectedDoctorId(newDoctor.id);
  };

  const updateDoctorHandler = (event) => {
    const { name, value } = event.target;
    updateDoctor(selectedDoctor.id, name, value);
  };

  const deleDoctorHandler = (doctorId) => {
    setSelectedDoctorId(doctorId);
    deleteDoctor(doctorId);
  };

  return (
    <div className="doctors-page  height-full">
      <div className="container height-full">
        <div className="left component overflow-y-scroll">
          <div className="mb-lg flex items-center">
            <div className="flex-grow mr-lg">
              <SearchBox placeholder="Rechercher" handler={handleQueryChange} />
            </div>
            <div>
              <Button variant="primary" onClick={addNewDoctorHandler}>
                Nouveau Médecin
              </Button>
            </div>
          </div>
          <div>
            <ul className="doctors-list">
              {doctors
                .filter((d) => d.lastName.toLowerCase().includes(query))
                .map((doctor) => (
                  <li
                    key={doctor.id}
                    onClick={() => setSelectedDoctorId(doctor.id)}
                    className="p-sm"
                  >
                    <DoctorItem
                      doctor={doctor}
                      deleteDoctor={deleDoctorHandler}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="right component overflow-y-scroll">
          <div>
            {selectedDoctor && (
              <form>
                <legend className="form-legend font-bold">Médecin</legend>
                <div className="form-grid">
                  <div>
                    <Input
                      label="Nom"
                      labelFor="doctorLastName"
                      placeholder="Nom"
                      name="lastName"
                      value={selectedDoctor.lastName}
                      handler={updateDoctorHandler}
                    />
                  </div>
                  <div>
                    <Input
                      label="Prénom"
                      labelFor="doctorFirstName"
                      placeholder="Prénom"
                      name="firstName"
                      value={selectedDoctor.firstName}
                      handler={updateDoctorHandler}
                    />
                  </div>
                  <div>
                    <Input
                      label="Provenance"
                      labelFor="doctorProvenance"
                      placeholder="Provenance"
                      name="provenance"
                      value={selectedDoctor.provenance}
                      handler={updateDoctorHandler}
                    />
                  </div>
                  <div>
                    <Input
                      label="Pavillon"
                      labelFor="doctorPavillon"
                      placeholder="Pavillon"
                      name="pavillon"
                      value={selectedDoctor.pavillon}
                      handler={updateDoctorHandler}
                    />
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const DoctorItem = ({ doctor, deleteDoctor }) => {
  return (
    <div className="doctor-item flex items-center justify-between">
      <div className="flex items-center">
        <div className="avatar mr-md"></div>
        <div>
          <h1 className="text--lg font-bold">{doctor.lastName}</h1>
          <p> {`${doctor.provenance} ${doctor.pavillon}`} </p>
        </div>
      </div>
      <div>
        <ButtonIcon
          Icon={MdClose}
          variant="accent"
          onClick={() => deleteDoctor(doctor.id)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  doctors: selectDoctors,
  selectedDoctor: selectSelectedDoctor,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedDoctorId: (id) => dispatch(setSelectedDoctorId(id)),
  addNewDoctor: (doctor) => dispatch(addNewDoctor(doctor)),
  deleteDoctor: (doctorId) => dispatch(deleteDoctor(doctorId)),
  updateDoctor: (id, name, value) => dispatch(updateDoctor(id, name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsPage);
