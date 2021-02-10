import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Game from "./pages/Game/Game"
import Ranking from "./pages/Ranking/Ranking"
import FinalPage from "./pages/FinalPage/FinalPage"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/game" component={Game} />
        <Route path="/end" component={FinalPage} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;