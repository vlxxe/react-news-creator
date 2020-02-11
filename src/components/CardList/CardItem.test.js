import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import configureStore from "redux-mock-store"
import { BrowserRouter as Router } from "react-router-dom"

import { CardItem } from "./CardItem"

const mockStore = configureStore([])

describe("<CardItem /> render correct", () => {
  let store
  let card
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
    card = {
      profile: {
        img: "http"
      },
      text: "text"
    }
    component = renderer.create(
      <Provider store={store}>
        <Router>
          <CardItem card={card} />
        </Router>
      </Provider>
    )
  })

  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
