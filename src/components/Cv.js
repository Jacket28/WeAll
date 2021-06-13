import {Backend} from "../services/backend";
import React, {useState} from "react";

export const Cv = (props) => {
    const {applier} = props;
    const [softskills, setSoftskills] = useState([]);
    const [experience, setExperience] = useState([]);
    const [langue, setLangue] = useState([]);
    const [sejour, setSejour] = useState([]);
    const [competence, setCompetence] = useState([]);

    React.useEffect(() => {
        Backend.getSoftskills(applier.id_postulant).then((softskills) => {
            setSoftskills(softskills);
        });
    }, []);

    React.useEffect(() => {
        Backend.getCompetences(applier.id_postulant).then((c) => {
            setCompetence(c);
        });
    }, []);

    React.useEffect(() => {
        Backend.getExperiences(applier.id_postulant).then((e) => {
            setExperience(e);
        });
    }, []);

    React.useEffect(() => {
        Backend.getLangues(applier.id_postulant).then((l) => {
            setLangue(l);
        });
    }, []);

    React.useEffect(() => {
        Backend.getSejours(applier.id_postulant).then((s) => {
            setSejour(s);
        });
    }, []);


    return (
        <>
            <div className="uk-grid" uk-grid>
                <div className="offre uk-width-1-3">
                    <div className="uk-card uk-card-default uk-width-1-1@m">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <div className="uk-width-auto">
                                </div>
                                <div className="uk-width-expand">
                                    <h3 className="uk-card-title uk-margin-remove-bottom">{applier.nom} ({applier.sexe})</h3>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <div className="listContainer">
                                <div className="rowContainer">
                                    <div>Entrée en fonction</div><div>{applier.disponibilite}</div>
                                </div>
                                <div className="rowContainer">
                                    {softskills ?
                                    softskills.map((s) => {
                                        return (
                                            <p>{s.softskill}</p>
                                        );
                                    }) : null}
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}