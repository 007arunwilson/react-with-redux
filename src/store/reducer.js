import * as actionTypes from './actions';


const initialState = {
    counter: 0,
    snapShots: []
}

const reducer = (state = initialState, action) => {


    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case actionTypes.DECREMENT:
            return { ...state, counter: state.counter - 1 };
        case actionTypes.ADD:
            return { ...state, counter: state.counter + action.payload.value };
        case actionTypes.SUBSTRACT:
            return { ...state, counter: state.counter - action.payload.value };
        case actionTypes.SAVECOUNTERSNAPSHOT:
            return { ...state, snapShots: state.snapShots.concat({ value: state.counter, id: new Date().getTime() }) };
        case actionTypes.DELETECOUNTERSNAPSHOT:

            const target_id = action.payload.id;
            let current_snap_shots = [...state.snapShots];

            const updated_snap_shots = current_snap_shots.filter(snapShot=>snapShot.id!==target_id);

            return { ...state,snapShots:updated_snap_shots};
        default:
            return { ...state };
            break;
    }

}

export default reducer;