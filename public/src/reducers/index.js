import { combineReducers } from "redux";
import ExampleReducer from './example-reducer';

export default combineReducers({
  example: ExampleReducer
});