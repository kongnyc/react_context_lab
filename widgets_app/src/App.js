import React from 'react';
import {Route,Switch} from "react-router-dom"
import NavBar from "./components/NavBar"
import Homepage from "./components/Homepage"
import Weather from "./components/Weather"
import Clock from "./components/Clock"
import ThemeProvider from "./providers/ThemeProvider"


function App() {
  return (
    <div className="App">
    <ThemeProvider>
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
    </ThemeProvider>
    </div>
  );
}

export default App;
