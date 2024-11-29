import React from 'react';
import { connect } from 'react-redux';
import { setData, resetData } from '../redux/actions/dataActions';
import { setTempData, resetTempData } from '../redux/actions/tempDataActions';

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
