import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";

export default function Messages() {
    // Hold the list of companies in the component state
    const [messages, setMessages] = useState([]);

    // Load the companies on component mounting
    useEffect(() => {
        const interval = setInterval(() => {
            fetchMessages();
        }, 1500);
        return () => clearInterval(interval);



    }, []);

    async function fetchMessages() {
        try {
            let messages = await Backend.message(localStorage.getItem("idRecipient"));
            setMessages(messages);
        } catch (e) {
            console.error(e);
        }
    }

    function isFromMe(m){
        const messageFromMe = m.id_user1 == localStorage.getItem("loginId")
        const className = messageFromMe ?
            "Messages-message currentMember" : "Messages-message";

        return (
            <>
                <li className={className}>
              <span
                  className="avatar"
                  style={{backgroundColor: "black"}}
              />
                    <div className="Message-content">
                        <div className="text">{m.message}</div>
                    </div>
                </li>
            </>
        );
    }

    return (
        <>
            <div>
                {messages.map((m) => (
                    isFromMe(m)
                ))}
            </div>
        </>
    );
}