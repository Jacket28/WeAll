import {isTokenStored} from "../utils/utils";
import React from "react";

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
    const [state, dispatch] = React.useReducer(logReducer, {
        isLoggedIn: isTokenStored(),
    });
    const value = { state, dispatch };
    return (
        <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
    );


}

export function useIsUserLoggedInContext() {
    // retourne le contexte avec son state
    return React.useContext(LoginContext);
}





