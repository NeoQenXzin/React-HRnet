import { createStore, combineReducers } from "redux";
import formReducer from "./Reducers/formReducer";
import boardReducer from "./Reducers/boardReducer";

const rootReducers = combineReducers({
  formReducer,
  boardReducer,
});

const store = createStore(rootReducers);

export default store;
