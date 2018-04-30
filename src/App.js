import React, { Component } from 'react';
import {createStore} from 'redux';

import reducer from './store/reducer';
import Counter from './containers/Counter/Counter';
import './App.css';

const store  = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
      </div>
    );
  }
}

export default App;
