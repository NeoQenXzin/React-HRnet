import React from "react";
/* eslint-disable default-case */
const INITIAL_STATE = {
  boardData: {
    firstName: "",
    lastName: "",
  },
};

export default function boardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GETBOARDDATA": {
      console.log("board data");
      return <div>board data</div>;
    }
  }
  return state;
}
