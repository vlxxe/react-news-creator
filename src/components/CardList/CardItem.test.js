import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

import { CardItem } from "./CardItem";
import { emptyStore } from "../../mocks/store";

describe("CardItem", () => {
  let component;
  let card = {
    profile: {
      img: "http"
    },
    text: "text"
  };
  beforeEach(() => {
    component = renderer.create(
      <Provider store={emptyStore}>
        <Router>
          <CardItem card={card} />
        </Router>
      </Provider>
    );
  });

  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
