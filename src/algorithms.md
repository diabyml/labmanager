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

# divide testExams algorigth
