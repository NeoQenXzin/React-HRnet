/* eslint-disable default-case */
const INITIAL_STATE = {
  user: [],
};

export default function boardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GETUSERFORMDATA": {
      console.log("board data");
      return {
        ...state,
        boardData: {
          user: action.payload,
        },
      };
    }
    case "ADDEMPLOYEE": {
      console.log("add employer");

      // const indexEmployeeAdd = state.user.findIndex(
      //   (obj) => obj.id === action.payload.id
      // );

      // if (indexEmployeeAdd !== -1) {
      console.log(action.payload);
      // } else {
      const newArr = [...state.user];
      newArr.push(action.payload);
      console.log(newArr);
      return { ...state, user: newArr };
      // }
      // return {
      //   ...state,
      //   boardData: {
      //     user: action.payload,
      //   },
      // };
    }
  }
  return state;
}
