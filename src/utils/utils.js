import {TOKEN_STORAGE_KEY} from "./request"; // token de l'API

export const isTokenStored = () => {
    return (
        // tester si le token n'est pas vide ou undefined
        localStorage.getItem(TOKEN_STORAGE_KEY) !== null && localStorage.getItem(TOKEN_STORAGE_KEY) !== undefined
    );
};



// pour nettoyer notre token lors de la déconnexion
export const cleanTokenStored = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    window.location = "/";
}
