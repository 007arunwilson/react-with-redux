import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions/actionTypes";
import * as counterActions from "../../store/actions/counter";
import * as snapshotActions from "../../store/actions/snapShot";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import "./Counter.css";

class Counter extends Component {
  render() {
    let snaplist_jsx = this.props.snapShots.map(snapShotObj => {
      return (
        <li title="Click to delete this snap shot" key={snapShotObj.id}>
          <a
            onClick={() =>
              this.props.onCounterDeleteSnapShotHandler(snapShotObj.id)
            }
            href="javascript:;"
          >
            {snapShotObj.value}
          </a>
        </li>
      );
    });

    return (
      <Fragment>
        <div>
          <CounterOutput value={this.props.ctr} />
          <CounterControl
            label="Increment"
            clicked={this.props.onIncrementHandler}
          />
          <CounterControl
            label="Decrement"
            clicked={this.props.onDecrementHandler}
          />
          <CounterControl label="Add 5" clicked={this.props.onAddHandler} />
          <CounterControl
            label="Subtract 5"
            clicked={this.props.onSubstractHandler}
          />
        </div>
        <hr />
        <div className="SaveBtnParent">
          <button
            onClick={() => this.props.onCounterSnapShotHandler(this.props.ctr)}
          >
            Save Couter Snapshot
          </button>
          <button
            style={{ margin: "10px" }}
            onClick={() => this.props.onNonDisaptchActionHandler(Date.now())}
          >
            Non Dispatch Action
          </button>
        </div>
        <div className="snapListPrnt">
          <ul>{snaplist_jsx}</ul>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    ctr: reduxState.counter.counter,
    snapShots: reduxState.snapshots.snapShots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementHandler: () => {
      dispatch(counterActions.increment());
    },
    onDecrementHandler: () => {
      dispatch(counterActions.decrement());
    },
    onAddHandler: () => {
      dispatch(counterActions.add({ value: 5 }));
    },
    onSubstractHandler: () => {
      dispatch(counterActions.substract({ value: 5 }));
    },
    onCounterSnapShotHandler: snapshot => {
      dispatch(snapshotActions.saveCounterSnapShot({ snapshot: snapshot }));
    },
    onCounterDeleteSnapShotHandler: snapShotId => {
      dispatch(snapshotActions.deleteCounterSnapShot({ id: snapShotId }));
    },
    onNonDisaptchActionHandler: time => {
      time % 2
        ? dispatch(counterActions.decrement())
        : dispatch(counterActions.increment());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
