//  {
//     id: uuidv4(),
//     paperType: paperTypes.MULTIPLE_PARAM,
//     category: categories.SEROLOGIE_IMMUNOLOGIE,
//     label: "Sérologie toxoplasmose",
//     name: "Toxo IgG et IgM",
//     refType: refTypes.MULTIPLE,

//     tests: [
//       {
//         id: uuidv4(),
//         paperType: paperTypes.MULTIPLE_REF_TEST,
//         refSign: {
//           lower: signs.lessThan.name,
//           higher: signs.greaterThanEqual.name,
//         },
//         category: categories.SEROLOGIE_IMMUNOLOGIE,
//         refType: refTypes.MULTIPLE,
//         name: "IgG",
//         unit: units.IU_SLASH_ML,
//         ref: { lower: 2, higher: 2 },
//         refString: [
//           `Négatif: ${signs.lessThan.sign} 2 ${units.IU_SLASH_ML}`,
//           `Positif: ${signs.greaterThanEqual.sign} 2 ${units.IU_SLASH_ML}`,
//         ],
//         result: [
//           {
//             id: uuidv4(),
//             type: undefined,
//             value: units.IU_SLASH_ML,
//           },
//         ],
//       },

//       {
//         id: uuidv4(),
//         paperType: paperTypes.MULTIPLE_REF_TEST,
//         refSign: {
//           lower: signs.lessThan.name,
//           higher: signs.greaterThan.name,
//         },
//         category: categories.SEROLOGIE_IMMUNOLOGIE,
//         refType: refTypes.MULTIPLE,
//         name: "IgM",
//         unit: units.AU_SLASH_ML,
//         ref: { lower: 2, higher: 2.6 },
//         refString: [
//           `Négatif: ${signs.lessThan.sign} 2 ${units.AU_SLASH_ML}`,
//           `Equivoque: 2-2.6 ${units.AU_SLASH_ML}`,
//           `Positif: ${signs.greaterThan.sign} 2.6 ${units.AU_SLASH_ML}`,
//         ],
//         result: [
//           {
//             id: uuidv4(),
//             type: undefined,
//             value: units.AU_SLASH_ML,
//           },
//         ],
//       },
//     ],
//   },

//   // toxo igG igM end

//   {
//     id: uuidv4(),
//     paperType: paperTypes.MULTIPLE_PARAM,
//     category: categories.SEROLOGIE_IMMUNOLOGIE,
//     label: "Sérologie toxoplasmose",
//     name: "Toxo IgG",
//     refType: refTypes.MULTIPLE,

//     tests: [
//       {
//         id: uuidv4(),
//         paperType: paperTypes.MULTIPLE_REF_TEST,
//         refSign: {
//           lower: signs.lessThan.name,
//           higher: signs.greaterThanEqual.name,
//         },
//         category: categories.SEROLOGIE_IMMUNOLOGIE,
//         refType: refTypes.MULTIPLE,
//         name: "IgG",
//         unit: units.IU_SLASH_ML,
//         ref: { lower: 2, higher: 2 },
//         refString: [
//           `Négatif: ${signs.lessThan.sign} 2 ${units.IU_SLASH_ML}`,
//           `Positif: ${signs.greaterThanEqual.sign} 2 ${units.IU_SLASH_ML}`,
//         ],
//         result: [
//           {
//             id: uuidv4(),
//             type: undefined,
//             value: units.IU_SLASH_ML,
//           },
//         ],
//       },
//     ],
//   },

//   // rubeole igG igM start
//   {
//     id: uuidv4(),
//     paperType: paperTypes.MULTIPLE_PARAM,
//     category: categories.SEROLOGIE_IMMUNOLOGIE,
//     label: "Sérologie Rubéole",
//     name: "Rubéole IgG et IgM",
//     refType: refTypes.MULTIPLE,
//     tests: [
//       {
//         id: uuidv4(),
//         paperType: paperTypes.MULTIPLE_REF_TEST,
//         refSign: {
//           lower: signs.lessThan.name,
//           higher: signs.greaterThanEqual.name,
//         },
//         category: categories.SEROLOGIE_IMMUNOLOGIE,
//         refType: refTypes.MULTIPLE,
//         name: "IgG",
//         unit: units.IU_SLASH_ML,
//         ref: { lower: 2, higher: 2 },
//         refString: [
//           `Négatif: ${signs.lessThan.sign} 2 ${units.IU_SLASH_ML}`,
//           `Positif: ${signs.greaterThanEqual.sign} 2 ${units.IU_SLASH_ML}`,
//         ],
//         result: [
//           {
//             id: uuidv4(),
//             type: undefined,
//             value: units.IU_SLASH_ML,
//           },
//         ],
//       },
//       {
//         id: uuidv4(),
//         paperType: paperTypes.MULTIPLE_REF_TEST,
//         refSign: {
//           lower: signs.lessThan.name,
//           higher: signs.greaterThan.name,
//         },
//         category: categories.SEROLOGIE_IMMUNOLOGIE,
//         refType: refTypes.MULTIPLE,
//         name: "IgM",
//         unit: units.AU_SLASH_ML,
//         ref: { lower: 2, higher: 3 },
//         refString: [
//           `Négatif: ${signs.lessThan.sign} 2 ${units.AU_SLASH_ML}`,
//           `Equivoque: 2-2.99 ${units.AU_SLASH_ML}`,
//           `Positif: ${signs.greaterThanEqual.sign} 3 ${units.AU_SLASH_ML}`,
//         ],
//         result: [
//           {
//             id: uuidv4(),
//             type: undefined,
//             value: units.AU_SLASH_ML,
//           },
//         ],
//       },
//     ],
//   },

//   {
//     id: uuidv4(),
//     paperType: paperTypes.MULTIPLE_PARAM,
//     category: categories.SEROLOGIE_IMMUNOLOGIE,
//     label: "Sérologie Rubéole",
//     name: "Rubéole IgG",
//     refType: refTypes.MULTIPLE,
//     tests: [
//       {
//         id: uuidv4(),
//         paperType: paperTypes.MULTIPLE_REF_TEST,
//         refSign: {
//           lower: signs.lessThan.name,
//           higher: signs.greaterThanEqual.name,
//         },
//         category: categories.SEROLOGIE_IMMUNOLOGIE,
//         refType: refTypes.MULTIPLE,
//         name: "IgG",
//         unit: units.IU_SLASH_ML,
//         ref: { lower: 2, higher: 2 },
//         refString: [
//           `Négatif: ${signs.lessThan.sign} 2 ${units.IU_SLASH_ML}`,
//           `Positif: ${signs.greaterThanEqual.sign} 2 ${units.IU_SLASH_ML}`,
//         ],
//         result: [
//           {
//             id: uuidv4(),
//             type: undefined,
//             value: units.IU_SLASH_ML,
//           },
//         ],
//       },
//     ],
//   },

//   //  Sérologie Rubéole end

//   {
//     id: uuidv4(),
//     paperType: paperTypes.MULTIPLE_PARAM,
//     category: categories.SEROLOGIE_IMMUNOLOGIE,
//     label: "Ac anti HBc Totaux",
//     name: "Ac anti HBc IgG et IgM",
//     refType: refTypes.MULTIPLE,
//     tests: [
//       {
//         id: uuidv4(),
//         paperType: paperTypes.MULTIPLE_REF_TEST,
//         refSign: {
//           lower: signs.lessThan.name,
//           higher: signs.greaterThanEqual.name,
//         },
//         category: categories.SEROLOGIE_IMMUNOLOGIE,
//         refType: refTypes.MULTIPLE,
//         name: "IgG",
//         unit: units.INDEX_SLASH_ML,
//         ref: { lower: 100, higher: 100 },
//         refString: [
//           `Négatif: ${signs.lessThan.sign} 100 ${units.INDEX_SLASH_ML}`,
//           `Positif: ${signs.greaterThanEqual.sign} 100 ${units.INDEX_SLASH_ML}`,
//         ],
//         result: [
//           {
//             id: uuidv4(),
//             type: undefined,
//             value: units.INDEX_SLASH_ML,
//           },
//         ],
//       },
//       {
//         id: uuidv4(),
//         paperType: paperTypes.SINGLE,
//         refSign: signs.none.name,
//         category: categories.SEROLOGIE_IMMUNOLOGIE,
//         name: "IgM",
//         unit: units.NONE,
//         ref: 0,
//         refString: `-`,
//         result: [
//           {
//             id: uuidv4(),
//             type: undefined,
//             value: "",
//           },
//         ],
//         refType: refTypes.SINGLE,
//       },
//     ],
//   },

//   {
//     id: uuidv4(),
//     paperType: paperTypes.MULTIPLE_PARAM,
//     category: categories.SEROLOGIE_IMMUNOLOGIE,
//     label: "Ac anti HBc Totaux",
//     name: "Ac anti HBc IgG",
//     refType: refTypes.MULTIPLE,
//     tests: [
//       {
//         id: uuidv4(),
//         paperType: paperTypes.MULTIPLE_REF_TEST,
//         refSign: {
//           lower: signs.lessThan.name,
//           higher: signs.greaterThanEqual.name,
//         },
//         category: categories.SEROLOGIE_IMMUNOLOGIE,
//         refType: refTypes.MULTIPLE,
//         name: "IgG",
//         unit: units.INDEX_SLASH_ML,
//         ref: { lower: 100, higher: 100 },
//         refString: [
//           `Négatif: ${signs.lessThan.sign} 100 ${units.INDEX_SLASH_ML}`,
//           `Positif: ${signs.greaterThanEqual.sign} 100 ${units.INDEX_SLASH_ML}`,
//         ],
//         result: [
//           {
//             id: uuidv4(),
//             type: undefined,
//             value: units.INDEX_SLASH_ML,
//           },
//         ],
//       },
//     ],
//   },

//   //ac anti hbc totaux end

//   {
//     id: uuidv4(),
//     paperType: paperTypes.MULTIPLE_PARAM,
//     category: categories.SEROLOGIE_IMMUNOLOGIE,
//     label: "Sérologie VIH",
//     name: "Sérologie VIH",
//     refType: refTypes.SINGLE,
//     tests: [
//       {
//         id: uuidv4(),
//         paperType: paperTypes.SINGLE,
//         refSign: signs.none.name,
//         category: categories.SEROLOGIE_IMMUNOLOGIE,
//         name: "VIH1",
//         unit: units.NONE,
//         ref: 0,
//         refString: `-`,
//         result: [
//           {
//             id: uuidv4(),
//             type: undefined,
//             value: "",
//           },
//         ],
//         refType: refTypes.SINGLE,
//       },
//       {
//         id: uuidv4(),
//         paperType: paperTypes.SINGLE,
//         refSign: signs.none.name,
//         category: categories.SEROLOGIE_IMMUNOLOGIE,
//         name: "VIH2",
//         unit: units.NONE,
//         ref: 0,
//         refString: `-`,
//         result: [
//           {
//             id: uuidv4(),
//             type: undefined,
//             value: "",
//           },
//         ],
//         refType: refTypes.SINGLE,
//       },
//     ],
//   },
