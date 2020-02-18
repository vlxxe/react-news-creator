import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

import { NavBar } from "./NavBar";
import { emptyStore } from "../../mocks/store";

describe("NavBar", () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <Provider store={emptyStore}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );
  });

  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
