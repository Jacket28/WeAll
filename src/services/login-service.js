import {isTokenStored} from "../utils/utils";
import React from "react";
import {TOKEN_STORAGE_KEY, IS_ENTREPRISE} from "../utils/request";

// création d'un contexte pour gérer le statut de login dans toute l'app
// + simple que les props dans ce cas

export const LoginContext = React.createContext();



// useReducer vous permet aussi d’optimiser les performances pour des composants qui déclenchent des mises à jours profondes
// puisque vous pouvez fournir dispatch à la place de fonctions de rappel.
function logReducer(state, action) {
    switch (action.type) {
        case "LOG_IN": {
            return { isLoggedIn: true, isEntreprise: action.isEntreprise };
        }
        case "LOG_OUT": {
            return { isLoggedIn: false, isEntreprise: null};
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

    const entreprise = localStorage.getItem(IS_ENTREPRISE);
    console.log("Entreprise: " + entreprise);
    const firstState = {
        isLoggedIn: isTokenStored(),
        isEntreprise: entreprise
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





