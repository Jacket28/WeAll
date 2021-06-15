import React, {useEffect, useState} from "react";
import {Backend} from "../services/backend";

export default function History() {
    // Hold the list of companies in the component state
    const [conversation, setConversation] = useState([]);

    // Load the companies on component mounting
    useEffect(() => {
        const interval = setInterval(() => {
            fetchHistory();
        }, 2500);
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
        let valeur = localStorage.getItem("userType")==true ? c.nom_postulant : c.nom_entreprise ;
        return valeur;
    }

    return (
        <>
            <ul>
                {conversation.map((c) => (
                    <li key={c.id_user2} onClick={() => {
                        localStorage.setItem("idRecipient", c.id_user2);
                    }}>{c.id_user2}, {getValeur(c)}</li>
                ))}
            </ul>
        </>
    );
}