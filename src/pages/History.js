import React, {useEffect, useState} from "react";
import {Backend} from "../services/backend";
import {IS_ENTREPRISE} from "../utils/request";
import {useIsUserLoggedInContext} from "../services/login-service";
import '../design/Conversation.css';

export default function History() {
    // Hold the list of companies in the component state
    const [conversation, setConversation] = useState([]);
    const {state, dispatch} = useIsUserLoggedInContext();
    const {isLoggedIn, isEntreprise} = state;


    // Load the companies on component mounting
    useEffect(() => {
        const interval = setInterval(() => {
            fetchHistory();
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    async function fetchHistory() {
        try {
            let conversation = await Backend.getConversation();
            setConversation(conversation);
        } catch (e) {
            console.error(e);
        }
    }

    function getValeur(c){
        let valeur = isEntreprise ? c.nom_postulant : c.nom_entreprise ;
        return valeur;
    }

    return (
        <>
            <ul id="listContact">
                {conversation
                    .sort((a, b) => a.id_user2 - b.id_user2)
                    .map((c) => (
                    <li key={c.id_user2} onClick={() => {
                        localStorage.setItem("idRecipient", c.id_user2);
                    }}>{c.id_user2}, {getValeur(c)}</li>
                ))}
            </ul>
        </>
    );
}