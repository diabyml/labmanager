//This method is used to chnage the value of a result in an array of tests
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
export const validateResult = (test, result) => {
  //get the sign
  //make comparison based on the sign
  //return comparison result
};
