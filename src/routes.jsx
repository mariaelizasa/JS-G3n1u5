import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Game from "./pages/Game/Game"
import Ranking from "./pages/Ranking/Ranking"
import Result from "./pages/Result/Result"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/game" component={Game} />
        <Route path="/save" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;