import React, { Fragment } from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import Counter from "../containers/Counter/Counter";
import SnapShotComponent from "../components/CounterControl/CounterControl";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

describe("Counter", () => {
  const initialState = {};
  const mockStore = configureStore();
  let props = {
    ctr: 0,
    snapShots: []
  };

  let snapShotComponent = () => {
    const store = mockStore(initialState);

    const wrapper = shallow(
      <Provider store={store}>
        <Fragment>
          <Counter {...props} />
        </Fragment>
      </Provider>
    );

    return wrapper;
  };

  describe("initial ctr is equal to props", () => {
    it("ctr check when the props equals to 0 initally:", () => {
      let wrapper;

      const store = mockStore(initialState);

      beforeEach(() => {
        // pass the mock function as the login prop

      });

      wrapper = shallow(
        <Provider store={store}>
          <Fragment>
            <Counter {...props} />
          </Fragment>
        </Provider>
      );

      const counterText = wrapper.find("div").length;
      //process.stdout.write("asas" + "\n");
      expect(counterText).toBe("Current Counter: 0");
    });
  });
});
