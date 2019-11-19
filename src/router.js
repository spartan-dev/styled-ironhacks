import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/components/Home";
import Uikit from "./Components/components/Uikit";
const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/uikit" component={Uikit}/>
  </Switch>
);

export default Router;