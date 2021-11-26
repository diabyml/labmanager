//This method is used to chnage the value of a result in an array of tests
import signs from "../constants/signs";
//and resturn a new array of tests
//which can be used to update an arrayof tests in a state
export const changeResultValue = (source, testId, resId, newValue) => {
  const newArray = source.map((test) => {
    if (test.id === testId) {
      const newRes = test.result.map((res) =>
        res.id === resId ? { ...res, value: newValue } : res
      );
      return { ...test, result: newRes };
    } else {
      return test;
    }
  });
  return newArray;
};

export const categorize = (testExams) => {
  let categorizedData = {};

  // get each individual test
  testExams.forEach((testExam) => {
    const category = testExam.category;

    // DEBUG
    // console.log(category);

    if (categorizedData[category]) {
      // category already exists
      categorizedData = {
        ...categorizedData,
        [category]: [...categorizedData[category], testExam],
      };
    } else {
      // category does not exists yet
      categorizedData = { ...categorizedData, [category]: [testExam] };
    }
  });
  // add it the categoriedData by using test ctegory name
  // if category exists append test this category
  // else create new category and add test

  return categorizedData;
};

// filter
// const filter = (arr, query) => {
//   return arr.filter((el) => el.toLowerCase().contains(query.toLowerCase()));
// };

//function for validating results
//it gets a test and a single result
//its checks if that result is in the normal range
//if in normal range return true else return false

const validateValue = (refSign, refValue, value) => {
  switch (refSign) {
    case signs.lessThan.name:
      console.log(`${value} < ${refValue}`);
      return value < refValue;
    case signs.lessThanEqual.name:
      return value <= refValue;
    default:
      return true;
  }
};

const isInRange = (lowerBound, upperBound, value) => {
  return value >= lowerBound && value <= upperBound;
};

const isNone = (value) => {
  const formatedValue = value.toLowerCase();
  console.log(formatedValue);
  switch (formatedValue) {
    case "négatif":
    case "négative":
    case "negative":
    case "negatif":
    case "néant":
    case "neant":
      return true;
    case "positif":
      return false;
    default:
      return false;
  }
};

const validateAgeRangeValue = (testExamName, value, age) => {
  if (testExamName === "c3ducomplement") {
    if (age >= 1 && age <= 14) {
      return value >= 0.8 && value <= 1.73;
    } else if (age > 14) {
      return value >= 0.82 && value <= 1.93;
    }
  }
};

export const validateResult = (result, genre, age = undefined) => {
  const { refSign, ref, value, isGenreDependent } = result;
  // let isValid = false;

  // if the result should be none meaning negative or neant
  if (refSign === signs.none.name) {
    if (parseInt(value) === 0) return true;
    return isNone(value);
  }

  if (refSign === signs.rangeWithAge.name) {
    return validateAgeRangeValue(result.testExamName, parseFloat(value), age);
  }

  // get the actual value out of value, which contains unit too
  const parsedValue = parseFloat(value);

  // validate result if genre is concerned
  if (isGenreDependent) {
    // if ref is range
    if (refSign === signs.range.name) {
      // genre is homme --> get homme ref with ref[0]
      if (genre === "homme") {
        const refBounds = ref[0];
        return isInRange(
          refBounds.lowerBound,
          refBounds.upperBound,
          parsedValue
        );
      } else if (genre === "femme") {
        // genre is femme --> get femme ref with ref[1]
        const refBounds = ref[1];
        return isInRange(
          refBounds.lowerBound,
          refBounds.upperBound,
          parsedValue
        );
      }
    } else {
      // ref is not range but still depend on genre
      // genre is homme --> get homme ref with ref[0]
      if (genre === "homme") {
        // console.log("ref: ", ref[0]);
        // console.log("refSign", refSign);
        // console.log("parsedValue", parsedValue);
        return validateValue(refSign, ref[0], parsedValue);
      } else if (genre === "femme") {
        // genre is femme --> get femme ref with ref[1]
        return validateValue(refSign, ref[1], parsedValue);
      }
    }
  } else {
    // calculation where genre does not matter
    if (refSign === signs.range.name) {
      // ref is in range
      return isInRange(ref[0], ref[1], parsedValue);
    } else {
      // not ranege ref, ref here are ever: <,<=,
      return validateValue(refSign, ref, parsedValue);
    }
  }

  // return isValid;
};
