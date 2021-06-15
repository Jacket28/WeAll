import {isTokenStored} from "../utils/utils";
import React from "react";
import { ENTREPRISE_KEY } from "../utils/request";

// création d'un contexte pour gérer le statut de login dans toute l'app
// + simple que les props dans ce cas

export const LoginContext = React.createContext();



// useReducer vous permet aussi d’optimiser les performances pour des composants qui déclenchent des mises à jours profondes
// puisque vous pouvez fournir dispatch à la place de fonctions de rappel.
function logReducer(state, action) {
    switch (action.type) {
        case "LOG_IN": {
            return { isLoggedIn: true };
        }
        case "LOG_OUT": {
            return { isLoggedIn: false };
        }
        case "LOG_ERROR": {
            return { isLoggedIn: false, error: action.error };
        }
        default: {
            return { isLoggedIn: false };
        }
    }
}


// faire passer la valeur dans notre app
export function LoginProvider({ children }) {

    const entreprise = localStorage.getItem(ENTREPRISE_KEY)
    const firstState = {
        isLoggedIn: isTokenStored(),
        isEntreprise: entreprise == 'false' ? false: true
    }

    const [state, dispatch] = React.useReducer(logReducer, firstState);
    const value = { state, dispatch };
    return (
        <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
    );


}

export function useIsUserLoggedInContext() {
    // retourne le contexte avec son state
    return React.useContext(LoginContext);
}





