import React, { useState } from "react";

import "./style.scss";

import { connect } from "react-redux";
import { selectPatientsHistory } from "../../redux/patient/patient.selectors";
import { deletePatientFromHistory } from "../../redux/patient/patient.actions";
import {
  addPatient,
  setSelectedPatientId,
} from "../../redux/patient/patient.actions";
import { createStructuredSelector } from "reselect";
import SearchBox from "../../components/search-box/index";

import { MdLocalPrintshop, MdDelete } from "react-icons/md";

import moment from "moment";
import ButtonIcon from "../../components/button-icon/index";

import { useHistory } from "react-router-dom";
import ROUTES from "../../seed/routes";
import Button from "../../components/button";
import CustomDialog from "../../components/custom-dialog/index";

function PatientsHistoryPage({
  patients,
  addPatient,
  setSelectedPatientId,
  deletePatientFromHistory,
}) {
  const [query, setQuery] = useState("");
  const [isDeleteDialogShown, setIsDeleteDialogShown] = useState(false);
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
    <>
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
                      <span className="mr-sm">
                        <ButtonIcon
                          Icon={MdLocalPrintshop}
                          variant={"secondary"}
                          onClick={() => printHandler(patient)}
                        />
                      </span>
                      <span>
                        <ButtonIcon
                          Icon={MdDelete}
                          variant={"accent"}
                          onClick={() =>
                            setIsDeleteDialogShown((prev) => !prev)
                          }
                        />
                      </span>
                      {isDeleteDialogShown && (
                        <CustomDialog
                          onClose={() =>
                            setIsDeleteDialogShown((prev) => !prev)
                          }
                        >
                          <div>
                            <h2 className="text-center mb-md">
                              Voulez-vous vraiment effacer ?
                            </h2>
                            <div className="flex justify-between">
                              <Button
                                variant="secondary"
                                onClick={() =>
                                  setIsDeleteDialogShown((prev) => !prev)
                                }
                                size="md"
                              >
                                NON
                              </Button>
                              <Button
                                variant="accent"
                                size={"md"}
                                onClick={() => {
                                  deletePatientFromHistory(patient.id);
                                  setIsDeleteDialogShown((prev) => !prev);
                                }}
                              >
                                OUI
                              </Button>
                            </div>
                          </div>
                        </CustomDialog>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  patients: selectPatientsHistory,
});

const mapDispatchToProps = (dispatch) => ({
  addPatient: (patient) => dispatch(addPatient(patient)),
  setSelectedPatientId: (id) => dispatch(setSelectedPatientId(id)),
  deletePatientFromHistory: (patientId) =>
    dispatch(deletePatientFromHistory(patientId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientsHistoryPage);
