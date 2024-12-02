// src/redux/reducer/dataReducer.js
// import { SET_DATA, RESET_DATA } from '../actions';
import { SET_DATA, RESET_DATA } from "../actions/dataActions";
import dataList from "../../assets/data.json";

const initialState = dataList; // Directly initialize as an array

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return action.payload; // Just return the payload (array)
    case RESET_DATA:
      return []; // Reset to an empty array
    default:
      return state;
  }
};

export default dataReducer;
