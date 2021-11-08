import { v4 as uuidv4 } from "uuid";
import ROUTES from "./routes";

import { IoIosPeople } from "react-icons/io";
import { FaHistory, FaPlus } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { ImLab } from "react-icons/im";

const PAGES = [
  {
    id: uuidv4(),
    name: "Patients",
    path: ROUTES.patients,
    Icon: IoIosPeople,
  },

  {
    id: uuidv4(),
    name: "Ajouter Patient",
    path: ROUTES.newPatient,
    Icon: FaPlus,
  },

  {
    id: uuidv4(),
    name: "Historique Patients",
    path: ROUTES.patientsHistory,
    Icon: FaHistory,
  },

  {
    id: uuidv4(),
    name: "Médecins",
    path: ROUTES.doctors,
    Icon: FaUserNurse,
  },

  {
    id: uuidv4(),
    name: "Examens",
    path: ROUTES.testExams,
    Icon: ImLab,
  },
];

export default PAGES;
