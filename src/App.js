import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Conversation from "./pages/Conversation";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import Home from "./pages/Home";
import React from "react";
import {NavigationBar} from "./pages/NavigationBar";
import {Offers} from "./pages/Offers";
import {Offers2} from "./pages/Offers2";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/companies" component={Companies} />
                <Route path="/conversation" component={Conversation} />
                <Route path="/offers" component={Offers2} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
