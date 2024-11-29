// src/redux/actions/dataActions.js
export const SET_DATA = 'SET_DATA';
export const RESET_DATA = 'RESET_DATA';

export const setData = (data) => ({
  type: SET_DATA,
  payload: data, // Payload will be the data you want to store in the state
});

export const resetData = () => ({
  type: RESET_DATA, // Resets the data
});
