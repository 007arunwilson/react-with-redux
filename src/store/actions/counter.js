import * as actionTypes from './actionTypes';

export const increment = () => ({
    type: actionTypes.INCREMENT
});

export const decrement = () => ({
    type: actionTypes.DECREMENT
});

export const add = (payload) => ({
    type: actionTypes.ADD,
    payload: payload,
});

export const substract = (payload) => ({
    type: actionTypes.SUBSTRACT,
    payload: payload,
});

