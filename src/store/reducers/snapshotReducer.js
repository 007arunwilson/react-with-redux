import * as actionTypes from '../actions/actionTypes';

const initialState = {
    snapShots: []
}

const snapshotReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SAVECOUNTERSNAPSHOT:
            return { ...state, snapShots: state.snapShots.concat({ value: action.payload.snapshot, id: new Date().getTime() }) };
        case actionTypes.DELETECOUNTERSNAPSHOT:

            const target_id = action.payload.id;
            let current_snap_shots = [...state.snapShots];

            const updated_snap_shots = current_snap_shots.filter(snapShot => snapShot.id !== target_id);

            return { ...state, snapShots: updated_snap_shots };
        default:
            return { ...state };
            break;
    }

}

export default snapshotReducer;