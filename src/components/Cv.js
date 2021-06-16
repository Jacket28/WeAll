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
                                <div className="uk-width-expand">
                                        <h3 className="uk-card-title uk-margin-remove-bottom">Profil du
                                            postulant·e {applier.id_postulant}</h3>
                                        <button className="btn-block btn-color" type="submit" onClick={() => {
                                            localStorage.setItem("idRecipient", applier.id_user);
                                            history.push("/conversation");
                                        }}>Conversation
                                        </button>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <ul uk-accordion="multiple: true">
                                <li class="uk-open">
                                    <a className="uk-accordion-title" href="#">Informations</a>
                                    <div className="uk-accordion-content">
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
                                <li class="uk-open">
                                    <a class="uk-accordion-title" href="#">Formation</a>
                                    <div className="uk-accordion-content">
                                        <div>
                                            {formation != null &&
                                            <div className="uk-grid ">
                                                <div className="item_label uk-width-1-4">Date</div>
                                                <div className="item_label uk-width-1-4">Cursus</div>
                                                <div className="item_label uk-width-1-4">Institut</div>
                                                <div className="item_label uk-width-1-4">Degree</div>
                                            </div>
                                            }
                                            {formation ?
                                                formation.map((f) => {
                                                    return (
                                                        <div className="uk-grid ">
                                                            <div className="uk-width-1-4">{f.date_fin}</div>

                                                            <div className="uk-width-1-4">{f.cursus}</div>
                                                            <div className="uk-width-1-4">{f.institut}</div>
                                                            <div className="uk-width-1-4">{f.degree}</div>
                                                        </div>
                                                    );
                                                }) : null}
                                        </div>
                                    </div>
                                </li>
                                <li class="uk-open">
                                    <a className="uk-accordion-title" href="#">Expériences professionnelles</a>
                                    <div className="uk-accordion-content">
                                        <div>
                                            {experience != null &&
                                            <div className="uk-grid ">
                                                <div className="item_label uk-width-1-4">Année d'expérience</div>
                                                <div className="item_label uk-width-1-4">Poste occupé</div>
                                                <div className="item_label uk-width-1-4">Secteur d'activité</div>
                                                <div className="item_label uk-width-1-4">Entreprise</div>
                                            </div>
                                            }
                                            {experience ?
                                                experience.map((e) => {
                                                    return (
                                                        <div className="uk-grid ">
                                                            <div className="uk-width-1-4">{e.date_debut}</div>

                                                            <div className="uk-width-1-4">{e.poste}</div>
                                                            <div className="uk-width-1-4">{e.id_secteur}</div>
                                                            <div className="uk-width-1-4">{e.entreprise}</div>
                                                        </div>
                                                    );
                                                }) : null}
                                        </div>
                                    </div>
                                </li>
                                <li class="uk-open">
                                    <a className="uk-accordion-title" href="#">Compétences</a>
                                    <div className="uk-accordion-content">
                                        {competence ?
                                            competence.map((c) => {
                                                return (
                                                    <div className="uk-grid ">
                                                        <div className="uk-width-1-4">{c.competence}</div>
                                                    </div>
                                                );
                                            }) : null}
                                    </div>
                                </li>
                                <li class="uk-open">
                                    <a className="uk-accordion-title" href="#">Langues</a>
                                    <div className="uk-accordion-content">
                                        <div>
                                            {formation != null &&
                                            <div className="uk-grid ">
                                                <div className="item_label uk-width-1-4">Langue</div>
                                                <div className="item_label uk-width-1-4">Niveau</div>
                                                <div className="item_label uk-width-1-4">Certificat</div>
                                                <div className="item_label uk-width-1-4">Séjour</div>
                                            </div>
                                            }
                                            {langue ?
                                                langue.map((l) => {
                                                    return (
                                                        <div className="uk-grid ">
                                                            <div className="uk-width-1-4">{l.langue}</div>
                                                            <div className="uk-width-1-4">{l.niveau}</div>
                                                            <div className="uk-width-1-4">{l.certificat}</div>
                                                            <div
                                                                className="uk-width-1-4">
                                                                {l.sejours ?
                                                                    l.sejours.map((s) => {
                                                                        return (
                                                                            <>{s.pays} </>
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
                                <li class="uk-open">
                                    <a className="uk-accordion-title" href="#" >Softskills</a>
                                    <div className="uk-accordion-content">
                                        {softskills ?
                                            softskills.map((s) => {
                                                return (
                                                    <div className="uk-grid ">
                                                        <div className="uk-width-1-4">{s.softskill}</div>
                                                    </div>
                                                );
                                            }) : null}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}