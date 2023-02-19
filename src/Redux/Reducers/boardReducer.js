/* eslint-disable default-case */
const INITIAL_STATE = {
  users: [],
};

export default function boardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDEMPLOYEE": {
      // console.log(action.payload);
      const newArr = [...state.users];
      newArr.push(action.payload);
      // console.log(newArr);
      return { ...state, users: newArr };
    }
  }
  return state;
}
