import { DOCTORS } from "../../seed";
const INITITIAL_STATE = {
  doctors: DOCTORS,
};

const doctorReducer = (state = INITITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default doctorReducer;
