// src/redux/actions/tempDataActions.js
export const SET_TEMP_DATA = 'SET_TEMP_DATA';
export const RESET_TEMP_DATA = 'RESET_TEMP_DATA';

export const setTempData = (tempData) => ({
  type: SET_TEMP_DATA,
  payload: tempData, // Payload will be the temporary data
});

export const resetTempData = () => ({
  type: RESET_TEMP_DATA, // Resets the temporary data
});
