import * as actionTypes from './actionTypes';

export const saveCounterSnapShot = (payload) => {

    return function (dispatch,getState) {

        const promiseInstance = new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });

        promiseInstance.then(()=>{

            console.log('[State snapshots before update]',getState().snapshots)

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