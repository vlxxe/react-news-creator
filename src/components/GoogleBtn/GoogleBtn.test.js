import React from "react"
import renderer from "react-test-renderer"
import GoogleBtn from "./GoogleBtn"

it(`GoogleBtn correctly renders after relaunch`, () => {
  const tree = renderer.create(<GoogleBtn></GoogleBtn>).toJSON()

  expect(tree).toMatchSnapshot()
})
