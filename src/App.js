import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { CreateCard } from "./pages/CreateCard";
import { CardContent } from "./components/CardContent/CardContent";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="uk-container uk-padding-small">
        <Switch>
          <Route component={Main} path="/" exact />

          <Route
            path="/card/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <CardContent cardId={id} />;
            }}
          />

          <Route component={CreateCard} path="/create-card" exact />

          <Route component={Login} path="/login" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
