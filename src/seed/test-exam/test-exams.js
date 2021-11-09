import { v4 as uuidv4 } from "uuid";
import { paperTypes } from "../../constants/paperTypes";
import { categories } from "../../constants/categories";
import signs from "../../constants/signs";
import units from "../../constants/units";
import refTypes from "../../constants/refTypes";
import groupNames from "../../constants/group-names";
import { TEST_EXAM_TYPES } from "../../constants/test-exam-type";

// Ids for multiple params
//These unique ids are used to match result array to tests array
const toxoIgGId = uuidv4();
const toxoIgMId = uuidv4();

const rubeoleIgGId = uuidv4();
const rubeoleIgMId = uuidv4();

const hbcIgGId = uuidv4();
const hbcIgMId = uuidv4();

const hiv1Id = uuidv4();
const hiv2Id = uuidv4();

const DATA = [
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThanEqual.name,
    category: categories.BIOCHIMIE,
    name: "ALT/GPT",
    unit: units.U_SLASH_L,
    ref: 31,
    refString: [`(${signs.lessThanEqual.sign}31${units.U_SLASH_L})`],
    result: [{ id: uuidv4(), type: undefined, value: units.U_SLASH_L }], // no value asssigned yet
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThanEqual.name,
    category: categories.BIOCHIMIE,
    name: "AST/GOT",
    unit: units.U_SLASH_L,
    ref: 37,
    refString: [`(${signs.lessThanEqual.sign}37${units.U_SLASH_L})`],
    result: [{ id: uuidv4(), type: undefined, value: units.U_SLASH_L }], // no value asssigned yet
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.BIOCHIMIE,
    name: "Gamma GT",
    unit: units.U_SLASH_L,
    ref: {
      first: { name: "H", value: 32, unit: units.U_SLASH_L },
      second: { name: "F", value: 49, unit: units.U_SLASH_L },
    },
    refString: [
      `F: ${signs.lessThan.sign}32 ${units.U_SLASH_L}`,
      `H: ${signs.lessThan.sign}49 ${units.U_SLASH_L}`,
    ],
    result: [{ id: uuidv4(), type: undefined, value: units.U_SLASH_L }], // no value asssigned yet
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.BIOCHIMIE,
    name: "LDH",
    unit: units.U_SLASH_L,
    ref: 480,
    refString: [`(${signs.lessThanEqual.sign}480${units.U_SLASH_L})`],
    result: [{ id: uuidv4(), type: undefined, value: units.U_SLASH_L }],
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.BIOCHIMIE,
    name: "Amylasémie",
    unit: units.U_SLASH_L,
    ref: 100,
    refString: [`(${signs.lessThanEqual.sign}100${units.U_SLASH_L})`],
    result: [{ id: uuidv4(), type: undefined, value: units.U_SLASH_L }],
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Ferritinemie",
    unit: units.NG_SLASH_ML,
    ref: {
      first: {
        name: "H",
        value: {
          lower: 16,
          higher: 220,
        },
        unit: units.NG_SLASH_ML,
      },
      second: {
        name: "F",
        value: {
          lower: 10,
          higher: 125,
        },
        unit: units.NG_SLASH_ML,
      },
    },
    refString: [
      `H: (16 ${signs.range.sign} 220) ${units.NG_SLASH_ML}`,
      `F: (10 ${signs.range.sign} 125) ${units.NG_SLASH_ML}`,
    ],
    result: [{ id: uuidv4(), type: undefined, value: units.NG_SLASH_ML }],
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: `Coefficient de saturation`,
    unit: units.PERCENTAGE,
    ref: {
      lower: 25,
      higher: 50,
    },
    refString: [`(25 ${signs.range.sign} 50)${units.PERCENTAGE}`],
    result: [{ id: uuidv4(), type: undefined, value: units.PERCENTAGE }],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Fer sérique",
    unit: units.UG_SLASH_DL,
    ref: { lower: 33, higher: 193 },
    refString: [`(33 - 193) ${units.UG_SLASH_DL}`],
    result: [{ id: uuidv4(), type: undefined, value: units.UG_SLASH_DL }],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Lipasémie",
    unit: units.U_SLASH_L,
    ref: { lower: 7, higher: 58 },
    refString: [`(7 ${signs.range.sign} 58)${units.U_SLASH_L}`],
    result: [{ id: uuidv4(), type: undefined, value: units.U_SLASH_L }],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Phosphatase Alcaline",
    unit: units.U_SLASH_L,
    ref: { lower: 35, higher: 104 },
    refString: [`(35 ${signs.range.sign} 104) ${units.U_SLASH_L}`],
    result: [{ id: uuidv4(), type: undefined, value: units.U_SLASH_L }],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Glycémie",
    unit: units.MMOL_SLASH_L,
    ref: {
      first: {
        name: units.MMOL_SLASH_L,
        value: { lower: 4.1, higher: 6.1 },
        unit: units.MMOL_SLASH_L,
      },
      second: {
        name: units.G_SLASH_L,
        value: { lower: 0.7, higher: 1.1 },
        unit: units.G_SLASH_L,
      },
    },
    refString: [
      `(4.1 - 6.1) ${units.MMOL_SLASH_L}`,
      `(0.7 - 1.1) ${units.G_SLASH_L}`,
    ],
    result: [
      { id: uuidv4(), type: units.MMOL_SLASH_L, value: units.MMOL_SLASH_L },
      { id: uuidv4(), type: units.G_SLASH_L, value: units.G_SLASH_L },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Créatinine",
    unit: units.UMOL_SLASH_L,
    ref: {
      lower: 53,
      higher: 120,
    },
    refString: [`(53 ${signs.range.sign} 120 ) ${units.UMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UMOL_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Urée",
    unit: units.MMOL_SLASH_L,
    ref: {
      lower: 2.5,
      higher: 7.5,
    },
    refString: [`(2.5 ${signs.range.sign} 7.5) ${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Uricémie",
    unit: units.UMOL_SLASH_L,
    ref: {
      lower: 180,
      higher: 420,
    },
    refString: [`(180${signs.range.sign}420) ${units.UMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UMOL_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.BIOCHIMIE,
    name: "Bilirubine Totale",
    unit: units.UMOL_SLASH_L,
    ref: 17,
    refString: [`(${signs.lessThan.sign}17) ${units.UMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UMOL_SLASH_L,
      },
    ],
  },

  //Bilirubine Directe               µmol/l                       (< 4.2) µmol/l

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.BIOCHIMIE,
    name: "Bilirubine Directe",
    unit: units.UMOL_SLASH_L,
    ref: 4.2,
    refString: [`(${signs.lessThan.sign} 4.2) ${units.UMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UMOL_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.BIOCHIMIE,
    name: "Bilirubine indirecte",
    unit: units.UMOL_SLASH_L,
    ref: 12,
    refString: [`(${signs.lessThan.sign}12) ${units.UMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UMOL_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Triglycérides",
    unit: units.MMOL_SLASH_L,
    ref: { lower: 0.6, higher: 1.8 },
    refString: [`(0.6 ${signs.range.sign} 1.8) ${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Fibrinogène",
    unit: units.G_SLASH_L,
    ref: { lower: 2, higher: 5 },
    refString: [`(2 ${signs.range.sign} 5) ${units.G_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.G_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Calcémie",
    unit: units.MMOL_SLASH_L,
    ref: { lower: 2.2, higher: 2.6 },
    refString: [`(2.2 ${signs.range.sign} 2.6) ${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Hémoglobine glyquée",
    unit: units.PERCENTAGE,
    ref: { lower: 4, higher: 7 },
    refString: [`(4 ${signs.range.sign} 7) ${units.PERCENTAGE}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.PERCENTAGE,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "CPK",
    unit: units.UI_SLASH_L,
    ref: { lower: 24, higher: 195 },
    refString: [`(24 ${signs.range.sign} 195) ${units.UI_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UI_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.BIOCHIMIE,
    name: "Cholesterol Total",
    unit: units.MMOL_SLASH_L,
    ref: 5.2,
    refString: [`(${signs.lessThan.sign}5.2) ${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "HDL Cholesterol",
    unit: units.MMOL_SLASH_L,
    ref: { lower: 0.77, higher: 1.83 },
    refString: [`(0.77${signs.range.sign}1.83)${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.BIOCHIMIE,
    name: "LDL Cholesterol",
    unit: units.MMOL_SLASH_L,
    ref: 3.36,
    refString: [`(${signs.lessThan.sign}3.6)${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Albuminémie",
    unit: units.G_SLASH_L,
    ref: { lower: 38, higher: 54 },
    refString: [`(38${signs.range.sign}54)${units.G_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.G_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.BIOCHIMIE,
    name: "CRP",
    unit: units.MG_SLASH_L,
    ref: 6,
    refString: [`(${signs.lessThan.sign}6${units.MG_SLASH_L})`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MG_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Bicarbonates (hco3)",
    fullName:
      "(Méthode enzymatique sur cobas c311)\nSeuil de sensibilité 2 mmol/l",
    unit: units.MMOL_SLASH_L,
    ref: { lower: 22, higher: 29 },
    refString: [`(22${signs.range.sign}29)${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
      },
    ],
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Na+",
    unit: units.MEQ_SLASH_L,
    ref: { lower: 135, higher: 155 },
    refString: [`(135${signs.range.sign}155)${units.MEQ_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MEQ_SLASH_L,
      },
    ],
    refType: refTypes.SINGLE,
    groupName: groupNames.IONO,
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "K+",
    unit: units.MEQ_SLASH_L,
    ref: { lower: 3.5, higher: 5.5 },
    refString: [`(3.5 ${signs.range.sign}5.5)${units.MEQ_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MEQ_SLASH_L,
      },
    ],
    refType: refTypes.SINGLE,
    // groupName: groupNames.IONO,
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Cl-",
    unit: units.MEQ_SLASH_L,
    ref: { lower: 97, higher: 115 },
    refString: [`(97${signs.range.sign}115)${units.MEQ_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MEQ_SLASH_L,
      },
    ],
    refType: refTypes.SINGLE,
    // groupName: groupNames.IONO,
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Magnésium",
    unit: units.MMOL_SLASH_L,
    ref: { lower: 0.6, higher: 1.05 },
    refString: [`(0.6${signs.range.sign}1.05)${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
      },
    ],
    refType: refTypes.SINGLE,
    // groupName: groupNames.IONO,
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Phosphore",
    unit: units.MMOL_SLASH_L,
    ref: { lower: 0.8, higher: 1.6 },
    refString: [`(0.8${signs.range.sign}1.6)${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
      },
    ],
    refType: refTypes.SINGLE,
    // groupName: groupNames.IONO,
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Calcémie",
    unit: units.MMOL_SLASH_L,
    ref: { lower: 2.2, higher: 2.6 },
    refString: [`(2.2${signs.range.sign}2.6)${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
      },
    ],
    refType: refTypes.SINGLE,
    // groupName: groupNames.IONO,
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Protéine Totale",
    unit: units.G_SLASH_L,
    ref: { lower: 62, higher: 80 },
    refString: [`(62${signs.range.sign}80)${units.G_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.G_SLASH_L,
      },
    ],
    refType: refTypes.SINGLE,
    // groupName: groupNames.IONO,
  },

  //   BIOCHIMIE TESTS END HERE....
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: "none",
    category: categories.PARASITOLOGIE,
    name: "GE",
    unit: units.TF_SLASH_MM3,
    refString: ["-"],
    ref: 0,
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.TF_SLASH_MM3,
      },
    ], // no value asssigned yet
  },

  //   PARASITOLOGIE ENDS HERE...

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Recherche d’Helicobacter pylori",
    unit: units.NONE,
    ref: 0,
    refString: [`-`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "BW (TPHA)",
    unit: units.NONE,
    ref: 0,
    refString: [`-`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: {
      lower: signs.lessThan.name,
      higher: signs.greaterThanEqual.name,
    },
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "BW",
    unit: units.MIU_SLASH_ML,
    ref: { lower: 1, higher: 1 },
    refString: [
      `Négatif: ${signs.lessThan.sign} 1 ${units.MIU_SLASH_ML} `,
      `Positif: ${signs.greaterThanEqual.sign} 1 ${units.MIU_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MIU_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "TPHA",
    unit: units.NONE,
    ref: 0,
    refString: [`-`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "VDRL",
    unit: units.NONE,
    ref: 0,
    refString: [`-`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Albumine (urine)",
    unit: units.NONE,
    ref: 0,
    refString: [`-`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Sucre (urine)",
    unit: units.NONE,
    ref: 0,
    refString: [`-`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.WIDAL,
    refSign: signs.none.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Widal",
    unit: units.NONE,
    ref: {
      o: { to: 0, ao: 0, bo: 0, co: 0 },
      h: { th: 0, ah: 0, bh: 0, ch: 0 },
    },
    refString: ["-"],
    result: [
      {
        id: uuidv4(),
        type: "TO",
        value: "",
      },
      {
        id: uuidv4(),
        type: "AO",
        value: "",
      },
      {
        id: uuidv4(),
        type: "BO",
        value: "",
      },
      {
        id: uuidv4(),
        type: "CO",
        value: "",
      },
      {
        id: uuidv4(),
        type: "TH",
        value: "",
      },
      {
        id: uuidv4(),
        type: "AH",
        value: "",
      },
      {
        id: uuidv4(),
        type: "BH",
        value: "",
      },
      {
        id: uuidv4(),
        type: "CH",
        value: "",
      },
    ],
    groupName: groupNames.WIDAL,
  },

  //widal end

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "ASLO",
    unit: units.IU_SLASH_ML,
    ref: 200,
    refString: [`${signs.lessThan.sign} 200 ${units.IU_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.IU_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: { lower: signs.lessThan.name, higher: signs.greaterThanEqual },
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "AgHBS",
    unit: units.INDEX_SLASH_ML,
    ref: { lower: 1, higher: 1 },
    refString: [
      `Négatif: ${signs.lessThan.sign} 1 ${units.INDEX_SLASH_ML} `,
      `Positif: ${signs.greaterThanEqual.sign} 1 ${units.INDEX_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.INDEX_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: { lower: signs.lessThan, higher: signs.greaterThanEqual },
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Ac anti HCV",
    unit: units.AU_SLASH_ML,
    ref: {
      lower: 20,
      higher: 20,
    },
    refString: [
      `Négatif: ${signs.lessThan.sign} 20 ${units.AU_SLASH_ML}`,
      `Positif: ${signs.greaterThanEqual.sign} 20 ${units.AU_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.AU_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: { lower: signs.lessThan, higher: signs.greaterThanEqual },
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "AgHBe",
    unit: units.INDEX_SLASH_ML,
    ref: {
      lower: 15,
      higher: 15,
    },
    refString: [
      `Négatif: ${signs.lessThan.sign} 15 ${units.INDEX_SLASH_ML}`,
      `Positif: ${signs.greaterThanEqual.sign} 15 ${units.INDEX_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.INDEX_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: { lower: signs.lessThan, higher: signs.greaterThanEqual },
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Ac anti HBe",
    unit: units.INDEX_SLASH_ML,
    ref: {
      lower: 100,
      higher: 100,
    },
    refString: [
      `Négatif: ${signs.lessThan.sign} 100 ${units.INDEX_SLASH_ML}`,
      `Positif: ${signs.greaterThanEqual.sign} 100 ${units.INDEX_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.INDEX_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: {
      lower: signs.lessThan.name,
      higher: signs.greaterThanEqual.name,
    },
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Ac anti HBS Totaux",
    unit: units.MIU_SLASH_ML,
    ref: { lower: 10, higher: 10 },
    refString: [
      `Négatif: ${signs.lessThan.sign} 10 ${units.MIU_SLASH_ML} `,
      `Positif: ${signs.greaterThanEqual.sign} 10 ${units.MIU_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MIU_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: {
      lower: signs.lessThan.name,
      higher: signs.greaterThanEqual.name,
    },
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Ac anti DNA NATIF",
    unit: units.NONE,
    ref: { lower: 3, higher: 300 },
    refString: [
      `Négatif: ${signs.lessThan.sign}3`,
      `Douteux : 30 ${signs.range.sign} 50`,
      `Probable : 50 ${signs.range.sign} 300`,
      `Positif : ${signs.greaterThan.sign} 300`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "C3 du complément",
    unit: units.G_SLASH_L,
    ref: {
      oneToFourteenRange: { lower: 0.8, higher: 1.73 },
      greaterThanFourteenRange: { lower: 0.82, higher: 1.93 },
    },
    refString: [
      `1 ${signs.range.sign} 14 ans: (0.80 ${signs.range.sign} 1.73)`,
      `${signs.greaterThan.sign} 14 ans: (0.82 ${signs.range.sign} 1.93)`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.G_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "C4 du complément",
    unit: units.G_SLASH_L,
    ref: {
      lower: 0.1,
      higher: 0.4,
    },
    refString: [`(0.10 ${signs.range.sign} 0.40) ${units.G_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.G_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Haptoglobine",
    unit: units.G_SLASH_L,
    ref: {
      lower: 0.14,
      higher: 2.58,
    },
    refString: [`(0.14 ${signs.range.sign} 2.58) ${units.G_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.G_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Test de Combs direct",
    unit: units.NONE,
    ref: 0,
    refString: [`-`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
    refType: refTypes.SINGLE,
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Test de Combs indirect",
    unit: units.NONE,
    ref: 0,
    refString: [`-`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
    refType: refTypes.SINGLE,
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Recherche de Schizocytes",
    unit: units.NONE,
    ref: 0,
    refString: [`-`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
    refType: refTypes.SINGLE,
  },

  // MULTIPLE PARAM TESTS

  // toxo igG and igM
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.MULTI_PARAM,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    label: "Sérologie toxoplasmose",
    name: "Toxo IgG et IgM",
    refType: refTypes.MULTIPLE,
    result: [
      {
        id: toxoIgGId,
        type: "IgG",
        value: units.IU_SLASH_ML,
        refString: [`Négatif : < 2 IU/ml`, `Positif : ≥ 2 IU/ml`],
      },
      {
        id: toxoIgMId,
        type: "IgM",
        value: units.AU_SLASH_ML,
        refString: [
          `Négatif : < 2 AU/ml`,
          `Equivoque : 2-2.6 AU/ml`,
          `Positif : > 2.6 AU/ml`,
        ],
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.MULTI_PARAM,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    label: "Sérologie toxoplasmose",
    name: "Toxo IgG",
    refType: refTypes.MULTIPLE,
    result: [
      {
        id: toxoIgGId,
        type: "IgG",
        value: units.IU_SLASH_ML,
        refString: [`Négatif : < 2 IU/ml`, `Positif : ≥ 2 IU/ml`],
      },
    ],
  },

  // RUBEOLE IgG and IgM
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.MULTI_PARAM,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    label: "Sérologie Rubéole",
    name: "Rubéole IgG et IgM",
    refType: refTypes.MULTIPLE,
    result: [
      {
        id: rubeoleIgGId,
        type: "IgG",
        value: units.IU_SLASH_ML,
        refString: [`Négatif : < 2 IU/ml`, `Positif : > ou égal à 2 IU/ml`],
      },
      {
        id: rubeoleIgMId,
        type: "IgM",
        value: units.AU_SLASH_ML,
        refString: [
          `Négatif : < 2 AU/ml`,
          `Equivoque : 2-2.99 AU/ml`,
          `Positif : ≥ 3 AU/ml`,
        ],
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.MULTI_PARAM,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    label: "Sérologie Rubéole",
    name: "Rubéole IgG",
    refType: refTypes.MULTIPLE,
    result: [
      {
        id: rubeoleIgGId,
        type: "IgG",
        value: units.IU_SLASH_ML,
        refString: [`Négatif : < 2 IU/ml`, `Positif : > ou égal à 2 IU/ml`],
      },
    ],
  },

  // AC ANTI HBC TOTAUX IgG IgM
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.MULTI_PARAM,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    label: "Ac anti HBc Totaux",
    name: "Ac anti HBc IgG et IgM",
    refType: refTypes.MULTIPLE,
    result: [
      {
        id: hbcIgGId,
        type: "IgG",
        value: units.INDEX_SLASH_ML,
        refString: [`Négatif : <100 index/ml`, `Positif : ≥ 100 index/ml`],
      },
      {
        id: hbcIgMId,
        type: "IgM",
        value: "",
        refString: [""],
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.MULTI_PARAM,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    label: "Ac anti HBc Totaux",
    name: "Ac anti HBc IgG",
    refType: refTypes.MULTIPLE,
    result: [
      {
        id: hbcIgGId,
        type: "IgG",
        value: units.INDEX_SLASH_ML,
        refString: [`Négatif : <100 index/ml`, `Positif : ≥ 100 index/ml`],
      },
    ],
  },

  // HIV
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.MULTI_PARAM,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    label: "Sérologie VIH",
    name: "Sérologie VIH",
    refType: refTypes.SINGLE,
    result: [
      {
        id: hiv1Id,
        type: "VIH1",
        value: "",
        refString: [""],
      },
      {
        id: hiv2Id,
        type: "HIV2",
        value: "",
        refString: [""],
      },
    ],
  },

  // TESTS GOES HERE

  //   SEROLOGIE IMMUNOLOGIE ENDS HERE...

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.HEMATOLOGIE,
    name: "Phénotypage Erythrocytaire ",
    unit: units.NONE,
    ref: 0,
    refString: [`-`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HEMATOLOGIE,
    name: "Taux de réticulocytes",
    unit: units.SLASH_MM3,
    ref: { lower: 25_000, higher: 100_000 },
    refString: [
      `(25 000 ${signs.range.sign} 100 000)${units.SLASH_MM3} en absence d'anémie`,
      `Si anémie:`,
      `${signs.lessThan.sign} 100 000${units.SLASH_MM3} arégénérative`,
      `${signs.greaterThan.sign} 100 000${units.SLASH_MM3} régénérative`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.SLASH_MM3,
      },
    ],
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.HEMATOLOGIE,
    name: "Groupage/RH",
    unit: units.NONE,
    ref: "none",
    refString: [`-`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
  },
  // HEMATOLOGIE TESTS END HERE...

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.HORMONES,
    name: "AFP",
    unit: units.IU_SLASH_ML,
    ref: 10,
    refString: [`(${signs.lessThan.sign}10) ${units.IU_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.IU_SLASH_ML,
      },
    ],
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.HORMONES,
    name: "PSA Total",
    fullName: "(Prostatic Specific Antigene)",
    unit: units.NG_SLASH_ML,
    ref: {
      first: { name: "H", value: 4, unit: units.NG_SLASH_ML },
      second: { name: "F", value: 0.5, unit: units.NG_SLASH_ML },
    },
    refString: [
      `H: ${signs.lessThan.sign}4 ${units.NG_SLASH_ML}`,
      `F: ${signs.lessThan.sign}0.5 ${units.NG_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NG_SLASH_ML,
      },
    ], // no value asssigned yet
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "Cortisolemie (8h)",
    unit: units.NMOL_SLASH_L,
    ref: {
      first: {
        name: "Matin",
        value: { lower: 140, higher: 700 },
        unit: units.NMOL_SLASH_L,
      },
      second: {
        name: "Minuit",
        value: { lower: 80, higher: 350 },
        unit: units.NMOL_SLASH_L,
      },
    },
    refString: [
      `Matin: (140${signs.range.sign}700) ${units.NMOL_SLASH_L}`,
      `Minuit: (80${signs.range.sign}350) ${units.NMOL_SLASH_L}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NMOL_SLASH_L,
      },
    ], // no value asssigned yet
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.HORMONES,
    name: "F-PSA",
    fullName: "(free Prostatic Specific Antigene)",
    unit: units.NG_SLASH_ML,
    ref: {
      first: { name: "H", value: 1.5, unit: units.NG_SLASH_ML },
      second: { name: "F", value: 0.1, unit: units.NG_SLASH_ML },
    },
    refString: [
      `H: ${signs.lessThan.sign}1.5 ${units.NG_SLASH_ML}`,
      `F: ${signs.lessThan.sign}0.1 ${units.NG_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NG_SLASH_ML,
      },
    ], // no value asssigned yet
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "Troponine",
    unit: units.NG_SLASH_ML,
    ref: { lower: 0, higher: 0.5 },
    refString: [`(0 ${signs.range.sign} 0.5)${units.NG_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NG_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "IgE",
    unit: units.IU_SLASH_ML,
    ref: { lower: 1, higher: 190 },
    refString: [`(1 ${signs.range.sign} 190)${units.IU_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.IU_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.HORMONES,
    name: "CK MB",
    unit: units.NG_SLASH_ML,
    ref: 5,
    refString: [`${signs.lessThan.sign}5 ${units.NG_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NG_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "FT3",
    fullName: "F3 libre",
    unit: units.PG_SLASH_ML,
    ref: { lower: 2.0, higher: 4.2 },
    refString: [`(2.0 ${signs.range.sign} 4.2) ${units.PG_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.PG_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "T3",
    fullName: "(Total triiodothyroxine)",
    unit: units.NG_SLASH_ML,
    ref: { lower: 1.0, higher: 2.8 },
    refString: [`(1.0 ${signs.range.sign} 2.8) ${units.NMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NMOL_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "FT4",
    fullName: "T4 libre",
    unit: units.PG_SLASH_ML,
    ref: { lower: 8.9, higher: 17.2 },
    refString: [`(8.9 ${signs.range.sign} 17.2) ${units.PG_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.PG_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "T4 (Maglumi 600)",
    fullName: "T4 Total",
    unit: units.NG_SLASH_ML,
    ref: { lower: 58, higher: 140 },
    refString: [`(58 ${signs.range.sign} 140) ${units.NMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NMOL_SLASH_L,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "TSH-us (Maglumi 600)",
    fullName: "(Thyroid Stimulating Hormone Ultra-Sensible)",
    unit: units.UUI_SLASH_ML,
    ref: { lower: 0.5, higher: 5 },
    refString: [`(0.5 ${signs.range.sign} 5) ${units.UUI_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UUI_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "PRL",
    fullName: "(Prolactinémie)",
    unit: units.UUI_SLASH_ML,
    ref: {
      first: {
        name: "H",
        value: { lower: 86.3, higher: 425.72 },
        unit: units.UUI_SLASH_ML,
      },
      second: {
        name: "F",
        value: { lower: 72.55, higher: 600.4 },
        unit: units.UUI_SLASH_ML,
      },
    },
    refString: [
      `H: (86.30 ${signs.range.sign} 425.72) ${units.UUI_SLASH_ML}`,
      `F: (72.55 ${signs.range.sign} 600.40) ${units.UUI_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UUI_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: {
      lower: signs.range.name,
      higher: signs.range.name,
    },
    category: categories.HORMONES,
    refType: refTypes.MULTIPLE,
    name: "Progestérone",
    unit: units.NG_SLASH_ML,
    ref: [
      {
        name: "H",
        lower: 0.23,
        higher: 1.5,
      },
      {
        name: "F",
        lower: 0.36,
        higher: 26.44,
      },
    ],
    refString: [
      `Homme: (0.23 ${signs.range.sign} 1.5) ${units.NG_SLASH_ML}`,
      `Femme:`,
      `Phase folliculaire : 0,36${signs.range.sign}1,21`,
      `Ovulation : 0.39${signs.range.sign}22.87`,
      `Phase lutéale : 2.12${signs.range.sign}26.44`,
      `Ménopause :${signs.lessThan.sign}0,89`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NG_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    category: categories.HORMONES,
    type: TEST_EXAM_TYPES.STANDARD,
    name: "Beta œstradiol",
    unit: units.PG_SLASH_ML,
    ref: [
      {
        name: "F",
        lower: 10,
        higher: 250,
      },
    ],
    refString: [
      `Femme:`,
      `Phase folliculaire : 15${signs.range.sign}112`,
      `Phase Preovulatoire : 136${signs.range.sign}250`,
      `Phase lutéale : 48${signs.range.sign}172`,
      `Postménopause : 10${signs.range.sign}66`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.PG_SLASH_ML,
      },
    ],
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "Testostérone",
    unit: units.NG_SLASH_ML,
    ref: {
      first: {
        name: "H",
        value: { lower: 2.6, higher: 10.45 },
        unit: units.NG_SLASH_ML,
      },
      second: {
        name: "F",
        value: { lower: 0.27, higher: 0.95 },
        unit: units.NG_SLASH_ML,
      },
    },
    refString: [
      `H:(2.64${signs.range.sign}10.45)  ${units.NG_SLASH_ML}`,
      `F: (0.27${signs.range.sign}0.95)  ${units.NG_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NG_SLASH_ML,
      },
    ], // no value asssigned yet
  },
  {
    id: uuidv4(),
    category: categories.HORMONES,
    type: TEST_EXAM_TYPES.STANDARD,
    name: "FSH",
    unit: units.MIU_SLASH_ML,
    ref: [
      {
        name: "H",
        lower: 1.25,
        higher: 13.5,
      },
      {
        name: "F",
        lower: 0.45,
        higher: 42.5,
      },
    ],
    refString: [
      `Homme : (1.25${signs.range.sign}13.50) ${units.MIU_SLASH_ML}`,
      "Femme:",
      `Phase folliculaire : (0.45${signs.range.sign}15.55)  ${units.MIU_SLASH_ML}`,
      `Ovulation : (5.35${signs.range.sign}24.80)  ${units.MIU_SLASH_ML}`,
      `Phase lutéale : (1.65${signs.range.sign}10.25)  ${units.MIU_SLASH_ML}`,
      `Post-ménopause : (24.60${signs.range.sign}42.50)  ${units.MIU_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MIU_SLASH_ML,
      },
    ],
  },
  // FSH END
  {
    id: uuidv4(),
    category: categories.HORMONES,
    type: TEST_EXAM_TYPES.STANDARD,
    name: "LH",
    unit: units.MIU_SLASH_ML,
    ref: [
      {
        name: "H",
        lower: 1.5,
        higher: 9.25,
      },
      {
        name: "F",
        lower: 1.05,
        higher: 94.75,
      },
    ],
    refString: [
      `Homme : (1.50${signs.range.sign}9.25) ${units.MIU_SLASH_ML}`,
      "Femme:",
      `Phase folliculaire : (1.25${signs.range.sign}11.80)  ${units.MIU_SLASH_ML}`,
      `Ovulation : (13.15${signs.range.sign}94.75)  ${units.MIU_SLASH_ML}`,
      `Phase lutéale : (1.05${signs.range.sign}14.50)  ${units.MIU_SLASH_ML}`,
      `Post-ménopause : (7.70${signs.range.sign}64.20)  ${units.MIU_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MIU_SLASH_ML,
      },
    ],
  },
  // LH END

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.HORMONES,
    name: "IFI",
    unit: units.NONE,
    ref: 1 / 100,
    refString: [`1/100`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.HORMONES,
    name: "CA15-3",
    unit: units.U_SLASH_ML,
    ref: 25,
    refString: [`${signs.lessThan.sign}25${units.U_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.U_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.HORMONES,
    name: "CA19-9",
    unit: units.U_SLASH_ML,
    ref: 37,
    refString: [`${signs.lessThan.sign}37${units.U_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.U_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.HORMONES,
    name: "ACE",
    unit: units.NG_SLASH_ML,
    ref: 5.0,
    refString: [`${signs.lessThan.sign}5.00${units.NG_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NG_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.HORMONES,
    name: "Facteur Rhumatoïde",
    unit: units.UUI_SLASH_ML,
    ref: 14,
    refString: [`${signs.lessThan.sign}14${units.UUI_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UUI_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.HORMONES,
    name: "CA 12-5",
    unit: units.U_SLASH_ML,
    ref: 35.0,
    refString: [`${signs.lessThan.sign}35.00${units.U_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.U_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.HORMONES,
    name: "D – Dimère",
    unit: units.UGFEU_SLASH_ML,
    ref: 0.5,
    refString: [`${signs.lessThan.sign}0.5${units.UGFEU_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UGFEU_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "Folates",
    unit: units.NG_SLASH_ML,
    ref: { lower: 5.21, higher: 20 },
    refString: [`(5.21 ${signs.range.sign} 20) ${units.NG_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NG_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "Vitamine B12",
    unit: units.PG_SLASH_ML,
    ref: { lower: 200, higher: 1100 },
    refString: [`(200 ${signs.range.sign} 1100) ${units.PG_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.PG_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "Parathormone",
    unit: units.PG_SLASH_ML,
    ref: { lower: 15.0, higher: 75.0 },
    refString: [`(15.00 ${signs.range.sign} 75.00) ${units.PG_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.PG_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.HORMONES,
    name: "Vitamine D Total (25-OH-VIT D)  ",
    unit: units.NG_SLASH_ML,
    ref: { lower: 30, higher: 100 },
    refString: [`(30 ${signs.range.sign} 100) ${units.NG_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NG_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: {
      lower: signs.lessThan.name,
      higher: signs.greaterThan.name,
    },
    category: categories.HORMONES,
    name: "Procalcitonine",
    unit: units.NG_SLASH_ML,
    ref: { lower: 0.5, higher: 2 },
    refString: [
      `${signs.lessThan.sign} 0.5 Faible risqué de sepsis`,
      `${signs.greaterThan.sign} 2 Risque élevé de sepsis où Choc septique`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NG_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    category: categories.HORMONES,
    type: TEST_EXAM_TYPES.STANDARD,
    name: "BHCG",
    unit: units.MIU_SLASH_ML,
    ref: 0,
    refString: [
      `Semaine:`,
      `1er Semaine 15 à 1000 ${units.MIU_SLASH_ML}`,
      `2e Semaine 15 à 1500 ${units.MIU_SLASH_ML}`,
      `3e Semaine 15 à 15000 ${units.MIU_SLASH_ML}`,
      `4e Semaine 15 à 23000 ${units.MIU_SLASH_ML}`,
      `Trimestre:`,
      `1er Trimestre 20 000-200 000 ${units.MIU_SLASH_ML}`,
      `2er Trimestre 10 000- 30 000 ${units.MIU_SLASH_ML}`,
      `3er Trimestre 5000-15 000 mUI/ml ${units.MIU_SLASH_ML}`,
      `Homme : (0-10) ${units.MIU_SLASH_ML}`,
      `NB : ${signs.lessThan.sign} 10 ${units.MIU_SLASH_ML} (Négatif)`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MIU_SLASH_ML,
      },
    ],
  },
  // HORMONES END HERE...

  {
    id: uuidv4(),
    paperType: paperTypes.MULTIPLE_REF_TEST,
    refSign: {
      lower: signs.lessThan.name,
      higher: signs.greaterThan.name,
    },
    category: categories.IMMUNOHEMATOLOGIE,
    refType: refTypes.MULTIPLE,
    name: "AC ANTI-DNA NATIF",
    fullName: "ELISA SUR CHORUS",
    unit: units.IU_SLASH_ML,
    ref: { lower: 30, higher: 300 },
    refString: [
      `Négatif : ${signs.lessThan.sign} 30 `,
      `Douteux : 30${signs.range.sign}50 `,
      `Positif : ${signs.greaterThan.sign} 50 - ${signs.lessThanEqual.sign}300`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.IU_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    paperType: paperTypes.MULTIPLE_REF_TEST,
    refSign: {
      lower: signs.lessThan.name,
      higher: signs.greaterThan.name,
    },
    category: categories.IMMUNOHEMATOLOGIE,
    refType: refTypes.MULTIPLE,
    name: "AC ANTI-NUCLEAIRES(ANA-Screen)",
    fullName: "ELISA SUR CHORUS",
    unit: units.IU_SLASH_ML,
    ref: { lower: 40, higher: 55 },
    refString: [
      `Positif : ${signs.greaterThan.sign} 55`,
      `Négatif : ${signs.lessThan.sign} 40`,
      `Equivoque : 40 ${signs.range.sign} 55`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.IU_SLASH_ML,
      },
    ],
  },

  {
    id: uuidv4(),
    paperType: paperTypes.SINGLE,
    refSign: signs.none.name,
    category: categories.IMMUNOHEMATOLOGIE,
    name: "Test de Coombs indirect (RAI)",
    unit: units.NONE,
    ref: 0,
    refString: `-`,
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
    refType: refTypes.SINGLE,
  },

  // IMMUNO HEMATOLOGIE ENDS HERE...

  {
    id: uuidv4(),
    paperType: paperTypes.MULTIPLE_REF_TEST,
    refSign: {
      lower: signs.lessThanEqual.name,
      higher: signs.greaterThan.name,
    },
    category: categories.ENZYMOLOGIE,
    refType: refTypes.MULTIPLE,
    name: "Glucose 6 Phosphate Deshydrogenase",
    unit: units.NONE,
    ref: [
      {
        name: "H",
        lower: 3.9,
        higher: 6,
      },
      {
        name: "F",
        lower: 3.9,
        higher: 4,
      },
    ],
    refString: [
      `Homme: `,
      `Déficient ${signs.lessThanEqual.sign} 3.9`,
      `Normal ${signs.greaterThanEqual.sign} 4`,
      `Femme: `,
      `Déficient ${signs.lessThanEqual.sign} 3.9`,
      `Intermédiaire : 4 ${signs.range.sign} 6 `,
      `Normal ${signs.greaterThan.sign} 6`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
      },
    ],
  },

  // ENZYMOLOGIE ENDS HERE ....
];

export default DATA;
