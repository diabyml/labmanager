UPDATE EXISTING USER IN REDUX STORE

    Link inputs to redux store directly

        redux-store method to upadate a patient info
            --> update(testId,UpdatedTestPatient)

FRONT END NEEDS TO KNOW WHICH PATIENT TO UPDATE:
----> keep track of selected patient id

        ----> if an input value changes update patient in redux-store

# INPUT FRONT END:

    -selectedPatientId (state);
    -Input value changes update(selectedPatientId,{...oldPatient,newValue})

# hematology finised

# divide testExams algorigthm

# VALIDATE TEST EXAM RESULT

FOR EACH RESULT VALUE
determine the type of norme,
-- type1: lessThanOrEqualTo --> <=
-- type2: lessThan --> <
-- type3: range --> lowerRange - upperRange
determine if result validation take account the genre
-- for that each result will have a isGenreDependent, which will determine if
-- the validation should be performed based on genre:
-- isGenreDependent (true): It takes account genre
-- isGenreDependent (false): It does not take account genre
-- An object with isGenreDependent to true will have an object containing the
-- value for each genre

isValid: signName, value, refValue
-- takes a sign name , a value and a refValue
-- make a comparison between value and refValue based on sign got from sign name

## isInRange:

validattion data: result properties for validation

# isGenreDependant and range value for homme and femme

--- isGenreDependent: true,
--- refSign: signs.range.name,
--- ref: [
{ lowerBound: 16, upperBound: 220 }, --> for homme
{ lowerBound: 10, upperBound: 125 }, --> for femme
],

# isGenreDependant and not range value

--- refSign: signs.lessThan.name,
--- isGenreDependent: true,
--- ref: [49, 32], --> for homme,femme

# not genre dependant and not range ref

refSign: signs., // change depending on testExam result
ref: 31,
isGenreDependent: false,

# not genre dependant and range ref

refSign: signs.range.name,
isGenreDependent: false,
ref: [25,50],
// ref[0] -- is lowerBound
// ref[1] -- is upperBound

## The result of test shoulb be null meaning: Negatif or Neant

refSign: signs.none.name,

## validation depent on patient age

refSign: signs.rangeWithAge,
testExam: "exam name", //based on test make the appropriate validation
