import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../../store/actions/actions';
import {
    increment,
    decrement,
    add,
    substract,
    saveCounterSnapShot,
    deleteCounterSnapShot
} from '../../store/actions/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import './Counter.css';

class Counter extends Component {

    render () {

        let snaplist_jsx = this.props.snapShots.map(snapShotObj=>{

            return <li title="Click to delete this snap shot" key={snapShotObj.id}  ><a onClick={()=>this.props.onCounterDeleteSnapShotHandler(snapShotObj.id)} href="javascript:;">{snapShotObj.value}</a></li>

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
                <button onClick={()=>this.props.onCounterSnapShotHandler(this.props.ctr)} >Save Couter Snapshot</button>
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
        ctr:reduxState.counter.counter,
        snapShots:reduxState.snapshots.snapShots,
    }
    
}

const mapDispatchToProps = dispatch => {

    return {
        onIncrementHandler:()=>{
            dispatch(increment())
        },
        onDecrementHandler:()=>{
            dispatch(decrement())
        },
        onAddHandler:()=>{
            dispatch(add({value:5}))
        },
        onSubstractHandler:()=>{
            dispatch(substract({value:5}))
        },
        onCounterSnapShotHandler:(snapshot)=>{
            dispatch(saveCounterSnapShot({snapshot:snapshot}))
        },
        onCounterDeleteSnapShotHandler:(snapShotId)=>{
            dispatch(deleteCounterSnapShot({id:snapShotId}))
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);