import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { NavBar } from "./components/NavBar/NavBar"
import { Main } from "./pages/Main"
import { Login } from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Main} path="/" exact />
        <Route component={Login} path="/login" exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
