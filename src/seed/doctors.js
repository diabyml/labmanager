import { v4 as uuidv4 } from "uuid";
const DOCTORS = [
  {
    id: uuidv4(),
    firstName: "Issa",
    lastName: "Dr Camara",
    provenance: "HOP PG",
    pavillon: "SAU",
  },
  {
    id: uuidv4(),
    firstName: "Aboubacar",
    lastName: "Dr Dabale",
    provenance: "HOP GT",
    pavillon: "GASTRO",
  },
];

export default DOCTORS;
