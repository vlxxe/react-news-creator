import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { NavBar } from "./components/NavBar/NavBar"
import { Main } from "./pages/Main"
import { Login } from "./pages/Login"
import { CreateCardForm } from "./components/CreateCardForm/CreateCardForm"

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="uk-container uk-padding-small">
        <Switch>
          <Route component={Main} path="/" exact />
          <Route component={CreateCardForm} path="/create-news" exact />
          <Route component={Login} path="/login" exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
