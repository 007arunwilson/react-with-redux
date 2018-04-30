import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementHandler} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementHandler}  />
                <CounterControl label="Add 5" clicked={this.props.onAddHandler}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractHandler}  />
            </div>
        );
    }
}

const mapStateToProps = reduxState => {

    return {
        ctr:reduxState.counter,
    }
    
}

const mapDispatchToProps = dispatch => {

    return {
        onIncrementHandler:()=>{
            dispatch({type:'INCREMENT'})
        },
        onDecrementHandler:()=>{
            dispatch({type:'DECREMENT'})
        },
        onAddHandler:()=>{
            dispatch({type:'ADD',payload:{value:5}})
        },
        onSubstractHandler:()=>{
            dispatch({type:'SUBSTRACT',payload:{value:5}})
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);