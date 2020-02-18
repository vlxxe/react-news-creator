import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

import { GoogleBtn } from "./GoogleBtn";
import { emptyStore } from "../../mocks/store";

describe("GoogleBtn", () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <Provider store={emptyStore}>
        <Router>
          <GoogleBtn />
        </Router>
      </Provider>
    );
  });

  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
