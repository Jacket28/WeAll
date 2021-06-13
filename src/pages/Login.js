import React, { useState } from "react";
import { Backend } from "../services/backend";
import { TOKEN_STORAGE_KEY } from "../utils/request";
import { useHistory } from "react-router-dom";

import './Login.css';
import {useIsUserLoggedInContext} from "../services/login-service";

export default function Login() {
  const {state, dispatch} = useIsUserLoggedInContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();

    try {
      let loginData = await Backend.login(email, password);

      // Save the token to localStorage & redirect to the home page
      localStorage.setItem(TOKEN_STORAGE_KEY, loginData.token);
      dispatch({type: "LOG_IN"});
      // Redirect to the home page
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <div>
        <div id="logContent" className="uk-container">
          <div className="uk-grid-margin uk-grid uk-grid-stack">
              <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"   >
                <div className="uk-card-header">
                <h3 className="mb-5 text-center ">Login - WeAll</h3></div>
                <div className="uk-card-body">
                <h6 className="msg-info">Connectez-vous à votre compte WeAll !</h6>

                <form onSubmit={handleSubmit}>
                  <input
                      required type="email" id="email" name="email" placeholder="Email" onChange={handleEmailChange}
                      value={email} className="form-control"/>
                  <input
                      required type="password" id="psw" name="psw" placeholder="Mot de passe" onChange={handlePasswordChange}
                      value={password} className="form-control"/>
                  <div className="row justify-content-center">
                    <button className="btn-block btn-color" type="submit">Valider</button>
                  </div>
                </form>
                </div>
                <div className="uk-card-footer">
                  <p>Vous n'avez pas de compte ? Cliquez
                  <a href="https://app.weallbackend.ch/inscription"> ici</a></p>
                </div>
              </div>
            </div>
        </div>
      </div>

);
}
