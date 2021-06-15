import "./design/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Conversation from "./pages/Conversation";
import Login from "./pages/Login";
import Home from "./pages/Home";
import React from "react";
import {NavigationBar} from "./pages/NavigationBar";
import {Offers} from "./pages/Offers";
import {Appliers} from "./pages/Appliers";

/* Structure de notre app avec les différentes routes */
function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/conversation" component={Conversation} />
                <Route path="/appliers" component={Appliers} />
                <Route path="/offers" component={Offers} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
