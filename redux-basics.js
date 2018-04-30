const redux = require('redux');
const create_store = redux.createStore;

const initial_state = { counter: 1 }

//Reducer
const rootReducer = (state = initial_state,action) => {

    if(action.type === 'INC_COUNTER')
    {   

        return {
            ...state,
            counter:state.counter+1
        };

    }

    if(action.type === 'ADD_COUNTER')
    {

        return {
            ...state,
            counter:state.counter+action.payload.value
        };

    }

    return state;
}

//Store
const store = create_store(rootReducer);

console.log(store.getState());


//Store Sucbription

store.subscribe(()=>{

    console.log('[Store State updated]',store.getState());

})




//Dispatching
store.dispatch(
    {
        type:'INC_COUNTER',
        payload:{}
    }
);

store.dispatch(
    {
        type:'ADD_COUNTER',
        payload:{
            value:10
        }
    }
);