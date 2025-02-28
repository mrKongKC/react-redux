import React from 'react';
import { connect } from 'react-redux';
import { setData, resetData } from '../../redux/actions/dataActions';
import { setTempData, resetTempData } from '../../redux/actions/tempDataActions';

const DataList = ({
  data,
  tempData,
  setData,
  resetData,
  setTempData,
  resetTempData,
}) => {
  const handleAddData = () => {
    const newData = [...data, `Item ${data.length + 1}`];
    setData(newData); // Set data to Redux store
  };

  const handleResetData = () => {
    resetData(); // Reset data to initial state
  };

  const handleAddTempData = () => {
    const newTempData = [...tempData, `Temp Item ${tempData.length + 1}`];
    setTempData(newTempData); // Set tempData to Redux store
  };

  const handleResetTempData = () => {
    resetTempData(); // Reset tempData to initial state
  };

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {Array.isArray(data) && data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAddData}>Add Item</button>
      <button onClick={handleResetData}>Reset Data</button>

      <h1>Temporary Data List</h1>
      <ul>
        {Array.isArray(tempData) && tempData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAddTempData}>Add Temp Item</button>
      <button onClick={handleResetTempData}>Reset Temp Data</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data, // Direct access to the array
  tempData: state.tempData, // Direct access to the array
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
  resetData: () => dispatch(resetData()),
  setTempData: (tempData) => dispatch(setTempData(tempData)),
  resetTempData: () => dispatch(resetTempData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
// explain Redux
// step 1 Dispatch
// dispatch will call action data
// example dispatch with setData(data) --> In this page, I use to set new value in `data`
// setData: (data) => dispatch(setData(data)),

// step 2 Action
// In action page
// export const SET_DATA = 'SET_DATA';
// export const setData = (data --> new data) => ({
//   type: SET_DATA, --> when dispatch  `SET_DATA` will have this type
//   payload: data, --> Payload will be the new data to store in the state
// });

// step 3 Reducer
// import { SET_DATA, RESET_DATA } from "../actions/dataActions"; --> import action
// import dataList from "../../assets/data.json"; 
// const initialState = dataList; // Directly initialize as an array

//explain state = initialState : is a default value which want to use

// const dataReducer = (state = initialState, action) => {
//   switch (action.type) { --> so when user use action redux will know now is which `type`
//     case SET_DATA:
//       return action.payload; // Just return the payload from action value

//this a payload and type that this reducer will do 
//  export const setData = (data --> new data) => ({
//   type: SET_DATA, --> when dispatch  `SET_DATA` will have this type
//   payload: data, --> Payload will be the new data to store in the state
// });


// For this case when it got a RESET_DATA will reset data to []
//     case RESET_DATA:
//       return []; // Reset to an empty array
//     default:
//       return state;
//   }
// };

// export default dataReducer;