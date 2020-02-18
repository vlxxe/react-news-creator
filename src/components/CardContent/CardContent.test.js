import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

import { CardContent } from "./CardContent";
import { emptyStore } from "../../mocks/store";
import { shallow, mount } from "enzyme";

describe("CardContent", () => {
  let component = renderer.create(
    <Provider store={emptyStore}>
      <Router>
        <CardContent />
      </Router>
    </Provider>
  );

  it("render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("show loader without data", () => {
    expect(component).toContainEqual(<h2>Загрузкаа</h2>);
  });
});
