import * as actionTypes from './actionTypes';

export const saveCounterSnapShot = (payload) => {

    return function (dispatch) {
        setTimeout(()=>{
            dispatch({
                type: actionTypes.SAVECOUNTERSNAPSHOT,
                payload:payload
            });
        },2000)
    }
};

export const deleteCounterSnapShot = (payload) => ({
    type: actionTypes.DELETECOUNTERSNAPSHOT,
    payload: payload,
});