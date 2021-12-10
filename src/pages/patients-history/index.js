import React, { useState } from "react";

import "./style.scss";

import { connect } from "react-redux";
import { selectPatientsHistory } from "../../redux/patient/patient.selectors";
import {
  addPatient,
  setSelectedPatientId,
} from "../../redux/patient/patient.actions";
import { createStructuredSelector } from "reselect";
import SearchBox from "../../components/search-box/index";

import { MdLocalPrintshop } from "react-icons/md";

import moment from "moment";
import ButtonIcon from "../../components/button-icon/index";

import { useHistory } from "react-router-dom";
import ROUTES from "../../seed/routes";

function PatientsHistoryPage({ patients, addPatient, setSelectedPatientId }) {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const queryChangeHandler = (e) => {
    const { value } = e.target;
    setQuery(value.toLocaleLowerCase());
  };

  const printHandler = (patient) => {
    addPatient({ ...patient, isArchived: true });
    setSelectedPatientId(patient.id);
    history.push(ROUTES.patients);
  };

  return (
    <div className="component height-full">
      <div className="" style={{ width: "300px" }}>
        <SearchBox
          placeholder="Rechercher Patient"
          handler={queryChangeHandler}
        />
      </div>
      <div className="py-md height-full overflow-y-scroll">
        <table>
          <thead>
            <tr>
              <th className="font-bold text--md">Patient N° </th>
              <th className="font-bold text--md">Nom et Prenom </th>
              <th className="font-bold text--md">Date</th>
              <th className="font-bold text--md">Médecin</th>
              <th className="font-bold text--md">Provenance</th>
              <th className="font-bold text--md">Pavillon</th>
              <th className="font-bold text--md">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients
              .filter((patient) => {
                const fullname = patient.lastName + " " + patient.firstName;
                return fullname.toLocaleLowerCase().includes(query);
              })
              .map((patient) => (
                <tr key={patient.id} className="text-center text--md">
                  <td>{patient.sampleNumber}</td>
                  <td> {`${patient.lastName} ${patient.firstName}`} </td>
                  <td> {moment(patient.date).format("l")} </td>
                  <td>
                    {`${patient.doctor.lastName} ${patient.doctor.lastName}`}
                  </td>
                  <td> {patient.doctor.provenance} </td>
                  <td> {patient.doctor.pavillon} </td>
                  <td>
                    <ButtonIcon
                      Icon={MdLocalPrintshop}
                      onClick={() => printHandler(patient)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  patients: selectPatientsHistory,
});

const mapDispatchToProps = (dispatch) => ({
  addPatient: (patient) => dispatch(addPatient(patient)),
  setSelectedPatientId: (id) => dispatch(setSelectedPatientId(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientsHistoryPage);
