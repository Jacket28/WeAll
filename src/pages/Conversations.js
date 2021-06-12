import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import { useHistory } from "react-router-dom";

export default function Conversations() {
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
    }, []);

    function startChat(id){
        localStorage.setItem("entrepriseId", id);
        history.push("/conversation");
    }


    return (
        <div>
            <h1>List of Companies to chat with</h1>
            <ul>
                {companies.map((c) => (
                    <div key={c.id_entreprise}>{c.nom}</div>
                ))}
            </ul>
        </div>
    );
}
