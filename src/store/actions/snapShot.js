import * as actionTypes from "./actionTypes";

export const saveCounterSnapShot = payload => {
  return function(dispatch, getState) {
    return dispatch({
      type: actionTypes.SAVECOUNTERSNAPSHOT,
      payload: payload
    });
  };
};

export const deleteCounterSnapShot = payload => {
  return {
    type: actionTypes.DELETECOUNTERSNAPSHOT,
    payload: payload
  };
};
