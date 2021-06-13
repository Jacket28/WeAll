import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Conversation from "./pages/Conversation";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import Home from "./pages/Home";
import React from "react";
import {NavigationBar} from "./pages/NavigationBar";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar />
            <header className="App-header">
                <p>Welcome to the WeAllChat</p>
                <img alt="logo" src="https://i.imgur.com/ywJF7mz.png" width = "100" height="100"/>
            </header>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/companies" component={Companies} />
                <Route path="/conversation" component={Conversation} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
