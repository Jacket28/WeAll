import {useIsUserLoggedInContext} from "../services/login-service";
import {cleanTokenStored} from "../utils/utils";
import {Link, NavLink} from "react-router-dom";
import React from "react";


/* Barre de navigation, en haut à droite */
export const NavigationBar = () => {

    const {state, dispatch} = useIsUserLoggedInContext();
    const {isLoggedIn, isEntreprise} = state;

    console.log("isEntreprise : " + isEntreprise);

    const logout = (e) => {
        e.preventDefault();
        dispatch({type: "LOG_OUT"}); // set le state
        cleanTokenStored(); // reset
    };

    return (
        <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-left">
                <img id="logoNav" alt="logo" src="https://static.wixstatic.com/media/88bd08_f5475ce0b96e4d1c957576fc855df317~mv2.png/v1/fill/w_192,h_198,al_c,q_85,usm_0.66_1.00_0.01/logo%20design%20appli.webp" width="50" height="50"/>
                <h2>WeAll - App</h2>
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    {isLoggedIn ? (<>
                            <li><Link className="App-link" to={`/conversation`}>Chat</Link></li>

                            {isEntreprise ?
                                <li><Link className="App-link" to={`/appliers`}>Postulant·e·s</Link></li>
                             :
                                <li><Link className="App-link" to={`/offers`}>Offres</Link></li>
                            }

                            <li><Link onClick={logout}>Logout</Link></li>
                        </>

                    ) : (
                        <li><Link className="App-link" to={`/login`}>Login</Link></li>)}
                </ul>
            </div>
        </nav>

    )

}