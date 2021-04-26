import React from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import Nav from "./components/Nav";
import NewPlantForm from "./components/NewPlantForm";
import "./App.css";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        {/* <PrivateRoute path='/userpage/items/:id' component={ItemPage} /> */}
        {/* <PrivateRoute path='/userpage' component={UserPage} /> */}
        {/* <PrivateRoute path='/profile' component={Profile} /> */}
        <Route path="/newplantform" component={NewPlantForm} />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
