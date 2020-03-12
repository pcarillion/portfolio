import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home"
import Portfolio from "./views/Portfolio"
import CV from "./views/CV"
import NavMain from "./components/NavMain"




function App() {
  return (
    <div>
    <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/CV" component={CV}/>
          <Route path="/portfolio" component={Portfolio}/>
    </Switch>
    </div>
  )
}

export default App;
