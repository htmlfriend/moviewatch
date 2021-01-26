import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { About as Contact } from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Route path='/about' component={Contact} />
        <Route path='/' exact={true} component={Home} />
        <Route path='/movie/:id' component={Detail} />
      </HashRouter>
    );
  }
}

export default App;
