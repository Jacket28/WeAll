import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import {useHistory} from "react-router-dom";


 export default function Applicant() {
    // Hold the list of companies in the component state
    const [applicant, setApplicant] = useState([]);
     const history = useHistory();

    // Load the companies on component mounting
     useEffect(() => {
         async function fetchApplicants() {
             try {
                 let applicant = await Backend.applicants();
                 console.log(applicant.toString())
                 setApplicant(applicant);
             } catch (e) {
                 console.error(e);
             }
         }

         fetchApplicants();
     }, []);

     return (
         <div>
             <h1>List of Applicants</h1>
             <ul>
                 {applicant.map((a) => (
                     <div key={a.id_user} onClick={() => {
                         localStorage.setItem("idRecipient", a.id_user);
                         history.push("/conversation");
                     }}>{a.id_user}, {a.nom}</div>
                 ))}
             </ul>
         </div>
     );
  }
