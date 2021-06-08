import React, { useState } from "react";
import { Backend } from "../services/backend";
import { TOKEN_STORAGE_KEY } from "../utils/request";
import { useHistory } from "react-router-dom";

import './Login.css';

export default function Login() {
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

      // Redirect to the home page
      history.push("/conversation");
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <div>
        <div className="leftBox">
          <div className="card card1">
            <div className="row justify-content-center my-auto">
              <div className="col-md-8 col-10 my-5">
                <div className="row justify-content-center px-3 mb-3">
                </div>
                <h3 className="mb-5 text-center heading">WeAllChat</h3>
                <h6 className="msg-info">Please login to your account</h6>
                <form onSubmit={handleSubmit}>
                <div>Username<input
                    required type="email" id="email" name="email" placeholder="Email" onChange={handleEmailChange}
                    value={email} className="form-control"/>
                </div>
                <div>Password <input
                    required type="password" id="psw" name="psw" placeholder="Password" onChange={handlePasswordChange}
                    value={password} className="form-control"/>
                </div>

                <div className="row justify-content-center my-3 px-3">
                  <button className="btn-block btn-color" type="submit">Let's chat !</button>
                </div>
                </form>
              </div>
            </div>
            <div className="bottom text-center mb-5">
              <p>Don't have an account?
                <a href="https://app.weallbackend.ch/inscription" className="btn-white">Create new</a>
              </p>
            </div>
          </div>
        </div>

        <div className="rightBox">
          <div className="card2">
            <div className="my-auto mx-md-5 px-md-5 right">
              <h3 className="text-white">What is WeAllChat ?</h3> <small className="text-white">WeAllChat offers you
              the chance to increase your professional network by chatting with one or more company. To do so, you
              must first of all get matched with a specific company and then you will be able to break the ice with
              some already pre-existent answer.
            </small>
            </div>
          </div>
        </div>

      </div>
);
}
