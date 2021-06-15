import React, {useState} from "react";
import {Backend} from "../services/backend";
import {Offer} from "../components/Offer";
import {Cv} from "../components/Cv";

/* Liste des postulants */
export const Appliers = () => {
    const [appliers, setAppliers] = useState([]);
    const [clickedApplier, setClickedApplier] = useState([]);
    const [softskills, setSoftskills] = useState([]);
    const [experience, setExperience] = useState([]);
    const [langue, setLangue] = useState([]);
    const [competence, setCompetence] = useState([]);
    const [formation, setFormation] = useState(null);


    /* Récupération des données via l'API (backend) */
    React.useEffect(() => {
        Backend.getPostulants().then((p) => {
            setAppliers(p);
        });
    }, []);


    React.useEffect(() => {
        Backend.getSoftskills(clickedApplier?.id_postulant).then((softskills) => {
            setSoftskills(softskills);
        });
    }, [clickedApplier]);

    React.useEffect(() => {
        Backend.getCompetences(clickedApplier?.id_postulant).then((c) => {
            setCompetence(c);
        });
    }, [clickedApplier]);

    React.useEffect(() => {
        Backend.getExperiences(clickedApplier?.id_postulant).then((e) => {
            setExperience(e);
        });
    }, [clickedApplier]);

    React.useEffect(() => {
        Backend.getLangues(clickedApplier?.id_postulant).then((l) => {
            setLangue(l);
        });
    }, [clickedApplier]);

    React.useEffect(() => {
        Backend.getFormations(clickedApplier.id_postulant).then((f) => {
            setFormation(f);
        });
    }, [clickedApplier]);

    /* Affichage de la liste */
    return(
        <>
            <div id="offerContent" className="uk-grid">
                <div id="appliersList" className="uk-width-1-5">
                    <div className="uk-flex-column" >
                        {appliers ?
                            appliers.map((applier) => {
                                return (
                                    <div  onClick={() => {
                                        setClickedApplier(applier);
                                    }}>
                                        <div className="uk-card uk-card-default uk-card-hover uk-card-body etiquettes">
                                            <h4 className="uk-card-title">Profil {applier.id_postulant}</h4>
                                            <p>{applier.sexe}</p>
                                        </div>
                                    </div>
                                );
                            }) : null }
                    </div>
                </div>
                <div id="cvDetails" className="detailsSection cv uk-width-4-5">
                    {clickedApplier && appliers ? (<Cv applier={clickedApplier} softskills={softskills} experience={experience} langue={langue} competence={competence} formation={formation}></Cv>) : null}
                </div>
            </div>
        </>
    )
}