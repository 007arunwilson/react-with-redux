const redux = require('redux');

const create_store = redux.createStore;


const initial_state = { counter: 1 }

//Reducer
const rootReducer = (state = initial_state,action) => {
    return state;
}

//Store
const store = create_store(rootReducer);

console.log(store.getState());