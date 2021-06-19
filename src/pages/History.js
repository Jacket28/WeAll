import React, {useEffect, useState} from "react";
import {Backend} from "../services/backend";
import '../design/Conversation.css';

export default function History() {
    // Hold the list of companies in the component state
    const [conversation, setConversation] = useState([]);

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

    return (
        <>
            <ul id="listContact">
                {conversation
                    .sort((a, b) => a.id_user2 - b.id_user2)
                    .map((c) => (
                    <li id="profil" key={c.id_user2} onClick={() => {
                        localStorage.setItem("idRecipient", c.id_user2);
                    }}>Profil {c.id_user2}</li>
                ))}
            </ul>
        </>
    );
}