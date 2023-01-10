/* eslint-disable default-case */
const INITIAL_STATE = {
  formData: {
    firstNameData: "",
    lastNameData: "",
    BirthDate: "",
    startDate: "",
    adress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    department: "",
  },
};

export default function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GETFORMDATA": {
      // console.log("get form data");
      // console.log(action.payload);
      return {
        ...state,
        formData: {
          firstNameData: action.payload[0],
          lastNameData: action.payload[1],
        },
      };
    }
  }
  return state;
}
