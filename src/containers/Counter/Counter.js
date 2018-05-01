import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import './Counter.css';

class Counter extends Component {

    render () {

        let snaplist_jsx = this.props.snapShots.map(snapShotObj=>{

            return <li key={snapShotObj.id}  ><a href="javascript:;">{snapShotObj.value}</a></li>

        })

        return (
            <Fragment>
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementHandler} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementHandler}  />
                <CounterControl label="Add 5" clicked={this.props.onAddHandler}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractHandler}  />
            </div>
            <hr/>
            <div className="SaveBtnParent">
                <button onClick={this.props.onCounterSnapShotHandler} >Save Couter Snapshot</button>
            </div>
            <div className="snapListPrnt">
                <ul>
                    {snaplist_jsx}
                </ul>
            </div>
            </Fragment>
        );
    }
}

const mapStateToProps = reduxState => {

    return {
        ctr:reduxState.counter,
        snapShots:reduxState.snapShots,
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
        },
        onCounterSnapShotHandler:()=>{
            dispatch({type:'SAVECOUNTERSNAPSHOT'})
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);