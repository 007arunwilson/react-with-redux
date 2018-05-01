
const initialState = {
    counter: 0,
    snapShots: []
}

const reducer = (state = initialState, action) => {


    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        case 'ADD':
            return { ...state, counter: state.counter + action.payload.value };
        case 'SUBSTRACT':
            return { ...state, counter: state.counter - action.payload.value };
        case 'SAVECOUNTERSNAPSHOT':
            return { ...state, snapShots: state.snapShots.concat({ value: state.counter, id: new Date().getTime() }) };
        case 'DELETECOUNTERSNAPSHOT':

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