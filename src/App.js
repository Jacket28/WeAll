import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Conversation from "./pages/Conversation";
import Companies from "./pages/Companies";
import Applicant from "./pages/Applicant";
import Login from "./pages/Login";
import React from "react";
import Conversations from "./pages/Conversations";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" src="https://i.imgur.com/ywJF7mz.png" width = "100" height="100"/>
        <p>Welcome to the WeAllChat</p>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/companies" component={Companies} />
            <Route path="/applicants" component={Applicant} />
            <Route path="/conversations" component={Conversations} />
            <Route path="/conversation" component={Conversation} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
