import * as actionTypes from './actionTypes';

export const saveCounterSnapShot = (payload) => {

    return function (dispatch) {

        const promiseInstance = new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });

        promiseInstance.then(()=>{
            return dispatch(
            {
                type: actionTypes.SAVECOUNTERSNAPSHOT,
                payload: payload
            });
        });
        
    }
};

export const deleteCounterSnapShot = (payload) => {

    return {
        type: actionTypes.DELETECOUNTERSNAPSHOT,
        payload: payload,
    }
};