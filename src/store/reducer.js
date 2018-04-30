
const initialState = {
    counter:0
}

const reducer = (state = initialState,action) => {


    switch(action.type){
        case 'INCREMENT':
        return {...state,counter:state.counter+1};
        case 'DECREMENT':
        return {...state,counter:state.counter-1};
        case 'ADD':
        return {...state,counter:state.counter+action.payload.value};
        case 'SUBSTRACT':
        return {...state,counter:state.counter-action.payload.value};
        default:
        return {...state};
        break;
    }

}

export default reducer;