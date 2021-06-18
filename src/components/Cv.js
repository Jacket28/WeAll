import {Backend} from "../services/backend";
import "../design/Offers.css";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";


/* Informations sur l'applier sélectionné  */
export const Cv = (props) => {
    const {applier, softskills, experience, langue, competence, formation} = props;
    const history = useHistory();

    return (
        <>
            <div className="uk-grid">
                <div className="uk-width-1-1">
                    <div className="uk-card uk-card-default uk-width-1-1@m">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <div className="uk-flex">
                                    <div className="uk-width-2-3">
                                        <h3 className="uk-card-title uk-margin-remove-bottom">Profil du
                                            postulant·e {applier.id_postulant}</h3>
                                    </div>
                                    <div className="uk-width-1-3">
                                        <button className="uk-align-right uk-margin-remove-bottom btn-block btn-color" type="submit" onClick={() => {
                                            localStorage.setItem("idRecipient", applier.id_user);
                                            history.push("/conversation");
                                        }}>Conversation
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <ul uk-accordion="multiple: true">
                                <li className="uk-open">
                                    <a className="uk-accordion-title" href="#">Informations</a>
                                    <div className="uk-accordion-content uk-margin-large-bottom">
                                        <div className="uk-grid ">
                                            <div className="item_label uk-width-1-6">Description brève</div>
                                            <div>{applier.description}</div>
                                        </div>
                                        <div className="uk-grid ">
                                            <div className="item_label uk-width-1-6">Contact</div>
                                            <div>{applier.telephone}</div>
                                        </div>
                                        <div className="uk-grid ">
                                            <div className="item_label uk-width-1-6">Disponibilité</div>
                                            <div>{applier.disponibilite}</div>
                                        </div>
                                        <div className="uk-grid ">
                                            <div className="item_label uk-width-1-6">Attentes salariales</div>
                                            <div>{applier.salaire_min} CHF - {applier.salaire_max} CHF</div>
                                        </div>
                                    </div>
                                </li>
                                {formation.length > 0 &&
                                <li>
                                    <a class="uk-accordion-title" href="#">Formations</a>
                                    <div className="uk-accordion-content uk-margin-large-bottom">
                                        <div
                                            className="uk-grid uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s">
                                            {formation ?
                                                formation.map((f) => {
                                                    return (

                                                        <div>
                                                            <div className="uk-card uk-card-default uk-card-body">
                                                                <div className="uk-card-badge uk-label">{f.degree}</div>
                                                                <p className="uk-card-title uk-margin-remove-bottom">{f.institut}</p>
                                                                <p className="uk-text-meta uk-margin-remove-top">{f.cursus}</p>
                                                                <p className="uk-text-meta uk-margin-remove-top">Obtenu
                                                                    en {f.date_fin.slice(0,10)}</p>
                                                            </div>

                                                        </div>
                                                    );
                                                }) : null}
                                        </div>
                                    </div>
                                </li>
                                }
                                {experience.length > 0 &&
                                <li>
                                    <a className="uk-accordion-title" href="#">Expériences professionnelles</a>
                                    <div className="uk-accordion-content uk-margin-large-bottom">

                                        <div
                                            className="uk-grid uk-grid-column-small uk-grid-row-large uk-child-width-1-1@s">
                                            {experience ?
                                                experience.map((e) => {
                                                    return (

                                                        <div>
                                                            <div
                                                                className="uk-card uk-card-default uk-card-body uk-margin-bottom">
                                                                <div
                                                                    className="uk-card-badge uk-label">{e.date_debut.slice(0,10)} - {e.date_fin.slice(0,10)}</div>
                                                                <p className="uk-card-title">{e.poste} auprès
                                                                    de {e.entreprise}</p>
                                                                <p className="uk-text-meta">Domaine : {e.id_secteur}</p>
                                                            </div>

                                                        </div>

                                                    );
                                                }) : null}
                                        </div>

                                    </div>
                                </li>
                                }

                                {langue.length > 0 &&
                                <li>
                                    <a className="uk-accordion-title" href="#">Langues</a>
                                    <div className="uk-accordion-content uk-margin-large-bottom">
                                        <div
                                            className="uk-grid uk-grid-match uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s">
                                            {langue ?
                                                langue.map((l) => {
                                                    return (

                                                        <div>
                                                            <div className="uk-card uk-card-default uk-card-body">
                                                                <div className="uk-card-badge uk-label">{l.niveau}</div>
                                                                <p className="uk-card-title uk-margin-remove-bottom">{l.langue}</p>
                                                                <p className="">Certificat : {l.certificat}</p>
                                                                <p className="uk-margin-remove-bottom">Séjours :</p>
                                                                {l.sejours ?
                                                                    l.sejours.map((s) => {
                                                                        return (
                                                                            <div
                                                                                className="uk-text-meta">{s.pays} </div>
                                                                        );
                                                                    }) : null
                                                                }

                                                            </div>
                                                        </div>


                                                    );
                                                }) : null}
                                        </div>


                                    </div>
                                </li>
                                }

                                {competence.length > 0 &&
                                <li>
                                    <a className="uk-accordion-title" href="#">Compétences</a>
                                    <div className="uk-accordion-content uk-margin-large-bottom">
                                        <ul className="uk-list uk-list-striped">

                                            {competence ?
                                                competence.map((c) => {
                                                    return (
                                                        <li>{c.competence}</li>
                                                    );
                                                }) : null}
                                        </ul>
                                    </div>
                                </li>
                                }

                                {softskills.length > 0 &&
                                <li>
                                    <a className="uk-accordion-title" href="#">Softskills</a>
                                    <div className="uk-accordion-content uk-margin-large-bottom">
                                        <ul className="uk-list uk-list-striped">

                                            {softskills ?
                                                softskills.map((s) => {
                                                    return (
                                                        <li>{s.softskill}</li>
                                                    );
                                                }) : null}
                                        </ul>
                                    </div>
                                </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}