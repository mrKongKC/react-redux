// src/redux/reducer/reducer.js
import { combineReducers } from 'redux';
import dataReducer from './dataReducer';  // Relative import
import tempDataReducer from './tempDataReducer'; // Relative import

const reducer = combineReducers({
  data: dataReducer,       // State for main data
  tempData: tempDataReducer, // State for temporary data
});

export default reducer;
