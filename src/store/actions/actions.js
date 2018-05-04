export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';
export const ADD='ADD';
export const SUBSTRACT='SUBSTRACT';
export const SAVECOUNTERSNAPSHOT='SAVECOUNTERSNAPSHOT';
export const DELETECOUNTERSNAPSHOT='DELETECOUNTERSNAPSHOT';

export const increment=() => ({
    type:INCREMENT
});

export const decrement=() => ({
    type:DECREMENT
});

export const add=(payload) => ({
    type:ADD,
    payload:payload,
});

export const substract=(payload) => ({
    type:SUBSTRACT,
    payload:payload,
});

export const saveCounterSnapShot=(payload) => ({
    type:SAVECOUNTERSNAPSHOT,
    payload:payload,
});

export const deleteCounterSnapShot=(payload) => ({
    type:DELETECOUNTERSNAPSHOT,
    payload:payload,
});