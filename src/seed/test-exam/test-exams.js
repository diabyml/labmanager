import { v4 as uuidv4 } from "uuid";
// import { paperTypes } from "../../constants/paperTypes";
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
    category: categories.BIOCHIMIE,
    name: "ALT/GPT",
    unit: units.U_SLASH_L,
    refString: [`(${signs.lessThanEqual.sign}31${units.U_SLASH_L})`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.U_SLASH_L,
        refSign: signs.lessThanEqual.name,
        ref: 31,
        isGenreDependent: false,
      },
    ], // no value asssigned yet
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    category: categories.BIOCHIMIE,
    name: "AST/GOT",
    unit: units.U_SLASH_L,
    refString: [`(${signs.lessThanEqual.sign}37${units.U_SLASH_L})`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.U_SLASH_L,
        refSign: signs.lessThanEqual.name,
        ref: 37,
        isGenreDependent: false,
      },
    ], // no value asssigned yet
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    category: categories.BIOCHIMIE,
    name: "Gamma GT",
    unit: units.U_SLASH_L,
    refString: [
      `H: ${signs.lessThan.sign}49 ${units.U_SLASH_L}`,
      `F: ${signs.lessThan.sign}32 ${units.U_SLASH_L}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.U_SLASH_L,
        refSign: signs.lessThan.name,
        isGenreDependent: true,
        ref: [49, 32],
        // ref first value is for homme, and the second value is for femme
      },
    ], // no value asssigned yet
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    category: categories.BIOCHIMIE,
    name: "LDH",
    unit: units.U_SLASH_L,
    refString: [`(${signs.lessThan.sign}480${units.U_SLASH_L})`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.U_SLASH_L,
        refSign: signs.lessThan.name,
        ref: 480,
        isGenreDependent: false,
      },
    ],
  },
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.lessThan.name,
    category: categories.BIOCHIMIE,
    name: "Amylasémie",
    unit: units.U_SLASH_L,
    ref: 100,
    refString: [`(${signs.lessThan.sign}100${units.U_SLASH_L})`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.U_SLASH_L,
        refSign: signs.lessThan.name,
        ref: 100,
        isGenreDependent: false,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    category: categories.BIOCHIMIE,
    name: "Ferritinemie",
    unit: units.NG_SLASH_ML,
    refString: [
      `H: (16 ${signs.range.sign} 220) ${units.NG_SLASH_ML}`,
      `F: (10 ${signs.range.sign} 125) ${units.NG_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.NG_SLASH_ML,
        isGenreDependent: true,
        refSign: signs.range.name,
        ref: [
          { lowerBound: 16, upperBound: 220 },
          { lowerBound: 10, upperBound: 125 },
        ],
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    category: categories.BIOCHIMIE,
    name: `Coefficient de saturation`,
    unit: units.PERCENTAGE,
    refString: [`(25 ${signs.range.sign} 50)${units.PERCENTAGE}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.PERCENTAGE,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [25, 50],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
      },
    ],
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
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UG_SLASH_DL,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [33, 193],
      },
    ],
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
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.U_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [7, 58],
      },
    ],
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
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.U_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [35, 104],
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Glycémie",
    unit: units.MMOL_SLASH_L,
    refString: [
      `(4.1 - 6.1) ${units.MMOL_SLASH_L}`,
      `(0.7 - 1.1) ${units.G_SLASH_L}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: units.MMOL_SLASH_L,
        value: units.MMOL_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [4.1, 6.1],
      },
      {
        id: uuidv4(),
        type: units.G_SLASH_L,
        value: units.G_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [0.7, 1.1],
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.BIOCHIMIE,
    name: "Créatinine",
    unit: units.UMOL_SLASH_L,
    refString: [`(53 ${signs.range.sign} 120 ) ${units.UMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UMOL_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [53, 120],
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
    refString: [`(2.5 ${signs.range.sign} 7.5) ${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [2.5, 7.5],
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
    refString: [`(180${signs.range.sign}420) ${units.UMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UMOL_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [180, 420],
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
    refString: [`(${signs.lessThan.sign}17) ${units.UMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UMOL_SLASH_L,
        refSign: signs.lessThan.name,
        ref: 17,
        isGenreDependent: false,
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
    refString: [`(${signs.lessThan.sign} 4.2) ${units.UMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UMOL_SLASH_L,
        refSign: signs.lessThan.name,
        ref: 4.2,
        isGenreDependent: false,
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
    refString: [`(${signs.lessThan.sign}12) ${units.UMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UMOL_SLASH_L,
        refSign: signs.lessThan.name,
        ref: 12,
        isGenreDependent: false,
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
    refString: [`(0.6 ${signs.range.sign} 1.8) ${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [0.6, 1.8],
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
    refString: [`(2 ${signs.range.sign} 5) ${units.G_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.G_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [2, 5],
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
    refString: [`(2.2 ${signs.range.sign} 2.6) ${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [2.2, 2.6],
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
    refString: [`(4 ${signs.range.sign} 7) ${units.PERCENTAGE}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.PERCENTAGE,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [4, 7],
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
    refString: [`(24 ${signs.range.sign} 195) ${units.UI_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.UI_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [24, 195],
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
    refString: [`(${signs.lessThan.sign}5.2) ${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 5.2,
        isGenreDependent: false,
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
    refString: [`(0.77${signs.range.sign}1.83)${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [0.77, 1.83],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
    refString: [`(${signs.lessThan.sign}3.6)${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 3.6,
        isGenreDependent: false,
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
    refString: [`(38${signs.range.sign}54)${units.G_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.G_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [38, 54],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
    refString: [`(${signs.lessThan.sign}6${units.MG_SLASH_L})`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MG_SLASH_L,
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 6,
        isGenreDependent: false,
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
    refString: [`(22${signs.range.sign}29)${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [22, 29],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
    refString: [`(135${signs.range.sign}155)${units.MEQ_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MEQ_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [135, 155],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
    refString: [`(3.5 ${signs.range.sign}5.5)${units.MEQ_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MEQ_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [3.5, 5.5],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
    refString: [`(97${signs.range.sign}115)${units.MEQ_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MEQ_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [97, 115],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
    refString: [`(0.6${signs.range.sign}1.05)${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [0.6, 1.05],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
    refString: [`(0.8${signs.range.sign}1.6)${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [0.8, 1.6],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
    refString: [`(2.2${signs.range.sign}2.6)${units.MMOL_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MMOL_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [2.2, 2.6],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
    refString: [`(62${signs.range.sign}80)${units.G_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.G_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [62, 80],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
    refString: [""],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.TF_SLASH_MM3,
        refSign: signs.none.name,
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
    refString: [``],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
        refSign: signs.none.name,
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
    refString: [``],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
        refSign: signs.none.name,
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
    refString: [``],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
        refSign: signs.none.name,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "BW",
    unit: units.MIU_SLASH_ML,
    refString: [
      `Négatif: ${signs.lessThan.sign} 1 ${units.MIU_SLASH_ML} `,
      `Positif: ${signs.greaterThanEqual.sign} 1 ${units.MIU_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.MIU_SLASH_ML,
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 1,
        isGenreDependent: false,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "TE",
    unit: units.NONE,
    refString: [``],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
        refSign: signs.none.name,
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
    refString: [``],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
        refSign: signs.none.name,
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
    refString: [``],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
        refSign: signs.none.name,
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
    refString: [""],
    result: [
      {
        id: uuidv4(),
        type: "TO",
        value: "",
        refSign: signs.none.name,
      },
      {
        id: uuidv4(),
        type: "AO",
        value: "",
        refSign: signs.none.name,
      },
      {
        id: uuidv4(),
        type: "BO",
        value: "",
        refSign: signs.none.name,
      },
      {
        id: uuidv4(),
        type: "CO",
        value: "",
        refSign: signs.none.name,
      },
      {
        id: uuidv4(),
        type: "TH",
        value: "",
        refSign: signs.none.name,
      },
      {
        id: uuidv4(),
        type: "AH",
        value: "",
        refSign: signs.none.name,
      },
      {
        id: uuidv4(),
        type: "BH",
        value: "",
        refSign: signs.none.name,
      },
      {
        id: uuidv4(),
        type: "CH",
        value: "",
        refSign: signs.none.name,
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
    refString: [`${signs.lessThan.sign} 200 ${units.IU_SLASH_ML}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.IU_SLASH_ML,
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 200,
        isGenreDependent: false,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "AgHBS",
    unit: units.INDEX_SLASH_ML,
    refString: [
      `Négatif: ${signs.lessThan.sign} 1 ${units.INDEX_SLASH_ML} `,
      `Positif: ${signs.greaterThanEqual.sign} 1 ${units.INDEX_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.INDEX_SLASH_ML,
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 1,
        isGenreDependent: false,
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
    refString: [
      `Négatif: ${signs.lessThan.sign} 20 ${units.AU_SLASH_ML}`,
      `Positif: ${signs.greaterThanEqual.sign} 20 ${units.AU_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.AU_SLASH_ML,
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 20,
        isGenreDependent: false,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "AgHBe",
    unit: units.INDEX_SLASH_ML,
    refString: [
      `Négatif: ${signs.lessThan.sign} 15 ${units.INDEX_SLASH_ML}`,
      `Positif: ${signs.greaterThanEqual.sign} 15 ${units.INDEX_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.INDEX_SLASH_ML,
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 15,
        isGenreDependent: false,
      },
    ],
  },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "Ac anti HBe",
    unit: units.INDEX_SLASH_ML,
    refString: [
      `Négatif: ${signs.lessThan.sign} 100 ${units.INDEX_SLASH_ML}`,
      `Positif: ${signs.greaterThanEqual.sign} 100 ${units.INDEX_SLASH_ML}`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.INDEX_SLASH_ML,
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 100,
        isGenreDependent: false,
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
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 10,
        isGenreDependent: false,
      },
    ],
  },

  // {
  //   id: uuidv4(),
  //   type: TEST_EXAM_TYPES.STANDARD,
  //   refSign: {
  //     lower: signs.lessThan.name,
  //     higher: signs.greaterThanEqual.name,
  //   },
  //   category: categories.SEROLOGIE_IMMUNOLOGIE,
  //   name: "Ac anti DNA NATIF",
  //   unit: units.NONE,
  //   ref: { lower: 3, higher: 300 },
  //   refString: [
  //     `Négatif: ${signs.lessThan.sign}3`,
  //     `Douteux : 30 ${signs.range.sign} 50`,
  //     `Probable : 50 ${signs.range.sign} 300`,
  //     `Positif : ${signs.greaterThan.sign} 300`,
  //   ],
  //   result: [
  //     {
  //       id: uuidv4(),
  //       type: undefined,
  //       value: "",
  //     },
  //   ],
  // },

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.range.name,
    category: categories.SEROLOGIE_IMMUNOLOGIE,
    name: "C3 du complément",
    unit: units.G_SLASH_L,
    refString: [
      `1 ${signs.range.sign} 14 ans: (0.80 ${signs.range.sign} 1.73)`,
      `${signs.greaterThan.sign} 14 ans: (0.82 ${signs.range.sign} 1.93)`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.G_SLASH_L,
        refSign: signs.rangeWithAge.name,
        testExamName: "c3ducomplement",
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
    refString: [`(0.10 ${signs.range.sign} 0.40) ${units.G_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.G_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [0.1, 0.4],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
    refString: [`(0.14 ${signs.range.sign} 2.58) ${units.G_SLASH_L}`],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.G_SLASH_L,
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [0.14, 2.58],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
    refString: [``],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
        refSign: signs.none.name,
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
    refString: [``],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
        refSign: signs.none.name,
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
    refString: [``],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: "",
        refSign: signs.none.name,
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
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 2,
        isGenreDependent: false,
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
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [2, 2.6],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
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
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 2,
        isGenreDependent: false,
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
        refString: [`Négatif : < 2 IU/ml`, `Positif : ≥ 2 IU/ml`],
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 2,
        isGenreDependent: false,
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
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 3,
        isGenreDependent: false,
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
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 100,
        isGenreDependent: false,
      },
      {
        id: hbcIgMId,
        type: "IgM",
        value: "",
        refString: [""],
        refSign: signs.none.name,
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
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 100,
        isGenreDependent: false,
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
        refSign: signs.none.name,
      },
      {
        id: hiv2Id,
        type: "HIV2",
        value: "",
        refString: [""],
        refSign: signs.none.name,
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
    category: categories.HORMONES,
    name: "Sérologie Amibienne IgM",
    unit: units.NONE,
    refString: [``],
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
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: {
      lower: signs.lessThan.name,
      higher: signs.greaterThan.name,
    },
    category: categories.IMMUNOHEMATOLOGIE,
    refType: refTypes.MULTIPLE,
    name: "AC ANTI-DNA NATIF",
    fullName: "ELISA SUR CHORUS",
    unit: units.IU_SLASH_ML,
    refString: [
      `Négatif : ${signs.lessThan.sign} 30 `,
      `Douteux : 30${signs.range.sign}50 `,
      `Positif : ${signs.greaterThan.sign} 50 - 300`,
      `Positif :>300`,
    ],
    result: [
      {
        id: uuidv4(),
        type: undefined,
        value: units.IU_SLASH_ML,
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 301,
        isGenreDependent: false,
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
    type: TEST_EXAM_TYPES.STANDARD,
    refSign: signs.none.name,
    category: categories.IMMUNOHEMATOLOGIE,
    name: "Test de Coombs indirect (RAI)",
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

  // IMMUNO HEMATOLOGIE ENDS HERE...

  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.STANDARD,
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

  // HEMOSTAS START HERE

  {
    id: uuidv4(),
    category: categories.HEMOSTASE,
    type: TEST_EXAM_TYPES.MULTI_PARAM,
    label: "TP",
    name: "TP",
    description: [
      "Prévention –traitement des thromboses veineuses-des embolies pulmonaires et systémiques : 2< INR<3+",
      "Prothèses valvulaires mécaniques-embolies systémiques récidivantes : 2< INR<4.5",
      "Risque hémorragique excessif : INR>5",
    ],
    result: [
      {
        id: uuidv4(),
        type: "Temps témoin",
        value: "14.5 sec",
        refString: ["(11 – 16) sec"],
      },
      {
        id: uuidv4(),
        type: "Temps malade",
        value: "sec",
        refString: [""],
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [11, 16],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
      },
      {
        id: uuidv4(),
        type: "INR",
        value: "sec",
        refString: ["(0.9-1.6) sec"],
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [0.9, 1.6],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
      },
      {
        id: uuidv4(),
        type: "Activité",
        value: "%",
        refString: ["(70-100 %)"],
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [70, 100],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
      },
    ],
  },

  {
    id: uuidv4(),
    category: categories.HEMOSTASE,
    type: TEST_EXAM_TYPES.MULTI_PARAM,
    label: "TCK",
    name: "TCK",
    result: [
      {
        id: uuidv4(),
        type: "Temps témoin",
        value: "34 sec",
        refString: ["(25 - 43) sec"],
      },
      {
        id: uuidv4(),
        type: "Temps malade",
        value: "sec",
        refString: [""],
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [25, 43],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
      },
      {
        id: uuidv4(),
        type: "Ratio",
        value: "",
        refString: ["(< 1.3)"],
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 1.3,
        isGenreDependent: false,
      },
    ],
  },

  {
    id: uuidv4(),
    category: categories.HEMOSTASE,
    type: TEST_EXAM_TYPES.MULTI_PARAM,
    label: "VS",
    name: "VS",
    result: [
      {
        id: uuidv4(),
        type: "Première heure",
        value: "mm",
        refString: ["2-20 mm/1 Heure"],
        refSign: signs.range.name,
        isGenreDependent: false,
        ref: [2, 20],
        // ref[0] -- is lowerBound
        // ref[1] -- is upperBound
      },
      {
        id: uuidv4(),
        type: "Deuxième heure",
        value: "mm",
        refString: ["< 35 mm/ 2 Heure"],
        refSign: signs.lessThan.name, // change depending on testExam result
        ref: 35,
        isGenreDependent: false,
      },
    ],
  },

  // HEMOSTASE ENDS HERE

  // IMMUNOPHENOTYPAGE
  {
    id: uuidv4(),
    type: TEST_EXAM_TYPES.MULTI_PARAM,
    category: categories.IMMUNOPHENOTYPAGE,
    name: "CD4",
    result: [
      {
        id: uuidv4(),
        type: "Cellules",
        value: "Cellules/ul",
        refString: ["( 440-1602)"],
      },
      {
        id: uuidv4(),
        type: "Pourcentage",
        value: "%",
        refString: ["( 32-54 ) %"],
      },
    ],
  },
];

export default DATA;
