import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";

 export default function Applicant() {
    // Hold the list of companies in the component state
    const [applicant, setApplicant] = useState([]);

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
                     <li key={a.id_user} >{a.nom}</li>
                 ))}
             </ul>
         </div>
     );
  }
