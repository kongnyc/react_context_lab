import React from 'react';
import {Route,Switch} from "react-router-dom"
import NavBar from "./components/NavBar"
import Homepage from "./components/Homepage"
import Weather from "./components/Weather"
import Clock from "./components/Clock"


function App() {
  return (
    <div className="App">
    <NavBar/>
      <Switch>
        <Route exact path={"/"}>
          <Homepage/>
        </Route>
        <Route path={"/weather"} >
          <Weather/>
        </Route>
        <Route exact path={"/clock"} >
          <Clock/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
