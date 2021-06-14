import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import { useHistory } from "react-router-dom";

export default function ConversationsWithCompanies() {
    // Hold the list of companies in the component state
    const [companies, setCompanies] = useState([]);
    const history = useHistory();

    // Load the companies on component mounting
    useEffect(() => {
        async function fetchCompanies() {
            try {
                let companies = await Backend.companies();
                setCompanies(companies);
            } catch (e) {
                console.error(e);
            }
        }
        fetchCompanies();
    }, [companies]);

    return (
        <div>
            <h1>List of Companies to chat with</h1>
            <ul>
                {companies.map((c) => (
                    <div key={c.id_user} onClick={() => {
                        localStorage.setItem("idRecipient", c.id_user);
                        history.push("/conversation");
                    }}>{c.id_user}, {c.nom}
                    </div>
                ))}
            </ul>
        </div>
    );
}
