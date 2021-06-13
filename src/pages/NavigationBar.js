
// CSS dans App.css
import {useIsUserLoggedInContext} from "../services/login-service";
import {cleanTokenStored} from "../utils/utils";
import {Link, NavLink} from "react-router-dom";

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
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    {isLoggedIn ? ( <>
                            <li><Link>Chat</Link></li>
                            <li><Link>Offre</Link></li>
                            <li><Link onClick={logout}>Logout</Link></li>
                            </>

                        ) : (
                        <li><Link className="App-link" to={`/login`}>Login</Link></li>)}
                </ul>
            </div>
        </nav>

    )

}