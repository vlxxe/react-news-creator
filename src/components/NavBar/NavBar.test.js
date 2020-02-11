import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import configureStore from "redux-mock-store"
import { BrowserRouter as Router } from "react-router-dom"

import { NavBar } from "./NavBar"

const mockStore = configureStore([])

describe("<NavBar /> render correct", () => {
  let store
  let component
  beforeEach(() => {
    store = mockStore({
      googleAuth: {
        userProfile: {
          id: 1,
          name: "test",
          img: "http"
        }
      }
    })
    component = renderer.create(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    )
  })

  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
