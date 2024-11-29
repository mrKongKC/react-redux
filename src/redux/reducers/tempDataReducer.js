// src/redux/reducer/tempDataReducer.js
// import { SET_TEMP_DATA, RESET_TEMP_DATA } from '../actions';
import { SET_TEMP_DATA, RESET_TEMP_DATA } from '../actions/tempDataActions';


const initialState = []; // Directly initialize as an array

const tempDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEMP_DATA:
      return action.payload; // Just return the payload (array)
    case RESET_TEMP_DATA:
      return []; // Reset to an empty array
    default:
      return state;
  }
};

export default tempDataReducer;
