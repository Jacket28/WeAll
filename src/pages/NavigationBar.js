
// CSS dans App.css
import {useIsUserLoggedInContext} from "../services/login-service";
import {cleanTokenStored} from "../utils/utils";
import {Link, NavLink} from "react-router-dom";
import React from "react";

export const NavigationBar = () => {

    const { state, dispatch } = useIsUserLoggedInContext();
    const { isLoggedIn } = state;


    const logout = (e) => {
        e.preventDefault();
        dispatch({ type: "LOG_OFF" }); // set le state
        cleanTokenStored(); // reset
    };



    return (

        <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-left">
                <img alt="logo" src="https://i.imgur.com/ywJF7mz.png" width = "50" height="50"/>
                <h2>WeAll - App</h2>
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    {isLoggedIn ? ( <>
                            <li><Link className="App-link" to={`/conversation`}>Chat</Link></li>
                            <li><Link className="App-link" to={`/offers`}>Offres</Link></li>
                            <li><Link className="App-link" to={`/appliers`}>Postulant·e·s</Link></li>
                            <li><Link onClick={logout}>Logout</Link></li>
                            </>

                        ) : (
                        <li><Link className="App-link" to={`/login`}>Login</Link></li>)}
                </ul>
            </div>
        </nav>

    )

}