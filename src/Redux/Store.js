import { createStore, combineReducers } from "redux";
import boardReducer from "./Reducers/boardReducer";

const rootReducers = combineReducers({
  boardReducer,
});

const store = createStore(rootReducers);

export default store;
