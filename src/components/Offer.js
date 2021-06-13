// contient la colonne offre et la colonne entreprise
import "../pages/Offers.css";

export const Offer = (props) => {
    const {offer, entreprise} = props;

    return (
        <>
            <div className="uk-grid">

                <div className="uk-width-2-3">
                    <div className="uk-card uk-card-default uk-width-1-1@m">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <div className="uk-width-auto">
                                </div>
                                <div className="uk-width-expand">
                                    <h4 className="uk-card-title uk-margin-remove-bottom">{offer.nom} ({offer.taux})</h4>
                                    <p className="uk-text-meta uk-margin-remove-top">{offer.contrat}</p>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-body">

                            <div className="listContainer">
                                <div className="uk-grid uk-child-width-expand@s">
                                    <div class="item_label">Entrée en fonction</div><div>{offer.dispo}</div>
                                </div>

                                <div className="uk-grid uk-child-width-expand@s">
                                    <div class="item_label">Durée de l'engagement</div><div>{offer.duree}</div>
                                </div>
                                <div className="uk-grid uk-child-width-expand@s">
                                    <div class="item_label">Salaire minimum</div><div>{offer.salaire_min}</div>
                                </div>
                                <div className="uk-grid uk-child-width-expand@s">
                                    <div class="item_label">Salaire maximum</div><div>{offer.salaire_max}</div>
                                </div>
                                <div className="uk-grid uk-child-width-expand@s">
                                    <div class="item_label">Lieu de travail</div><div>{offer.NPA} {offer.ville}</div>
                                </div>
                            </div>

                            <div class="uk-divider-icon"></div>

                            <p>Nous vous offrons : </p>
                            <ul>
                                <li>{entreprise.ethique}</li>
                                <li>{entreprise.benefice_externe_1}</li>
                                <li>{entreprise.benefice_externe_2}</li>
                                <li>{entreprise.benefice_externe_3}</li>
                            </ul>
                        </div>
                        <div className="uk-card-footer">
                            <a href={offer.url} className="uk-button uk-button-text">Voir plus d'informations sur l'offre</a>
                        </div>
                    </div>
                </div>

                <div className="uk-width-1-3">
                    <div className="uk-card uk-card-default uk-width-1-1@m">
                        <div className="uk-card-header">
                            <div className="uk-flex uk-flex-between">
                                <div>
                                    <h4 className="uk-card-title uk-margin-remove-bottom">{entreprise.nom}</h4>
                                    <p className="uk-text-meta uk-margin-remove-top">{entreprise.secteur}</p>
                                </div>
                                <div>
                                    <img className="uk-border-square" width="40" height="40" src={entreprise.image_url}/>
                                </div>
                            </div>
                        </div>

                        <div className="uk-card-body">
                            <div>
                                <div id="description" className="information_block">
                                    <p><b>Description de l'entreprise</b></p>
                                    <p>{entreprise.description}</p>
                                </div>

                                <div id="personne_de_contact" class="information_block">
                                    <p><b>Personne de contact</b></p>
                                    <p>{entreprise.prenom_responsable_RH} {entreprise.nom_responsable_RH}</p>
                                    <p>{entreprise.poste_responsable_RH}</p>
                                    <p>{entreprise.telephone_responsable_RH} </p>
                                </div>

                                <div id="contact_entreprise" class="information_block">
                                    <p><b>Emplacement</b></p>
                                    <p>{entreprise.adresse}</p>
                                    <p>{entreprise.adresse_suplémentaire}</p>
                                    <p>{entreprise.NPA} {entreprise.localite}</p>
                                </div>

                                <div id="secteur_entreprise" class="information_block">
                                    <p><b>Secteur</b></p>
                                    <p>{entreprise.secteur}</p>
                                </div>
                                <div id="type_entreprise" class="information_block">
                                    <p><b>Type d'entreprise</b></p>
                                    <p>{entreprise.type_entreprise}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/*<div className="uk-grid" uk-grid>
                <div className="offre uk-width-1-3">
                    <div className="uk-card uk-card-default uk-width-1-1@m">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <div className="uk-width-auto">
                                </div>
                                <div className="uk-width-expand">
                                    <h3 className="uk-card-title uk-margin-remove-bottom">{offer.nom} ({offer.taux})</h3>
                                    <p className="uk-text-meta uk-margin-remove-top">{offer.contrat}</p>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <div className="listContainer">
                                <div className="rowContainer">
                                    <div>Entrée en fonction</div><div>{offer.dispo}</div>
                                </div>
                                <div className="rowContainer">
                                    <div>Durée de l'engagement</div><div>{offer.duree}</div>
                                </div>
                                <div className="rowContainer">
                                    <div>Salaire minimum</div><div>{offer.salaire_min}</div>
                                </div>
                                <div className="rowContainer">
                                    <div>Salaire maximum</div><div>{offer.salaire_max}</div>
                                </div>
                                <div className="rowContainer">
                                    <div>Lieu de travail</div><div>{offer.NPA} {offer.ville}</div>
                                </div>
                            </div>
                            <p>Nous vous offrons : </p>
                            <ul>
                                <li>{entreprise.ethique}</li>
                                <li>{entreprise.benefice_externe_1}</li>
                                <li>{entreprise.benefice_externe_2}</li>
                                <li>{entreprise.benefice_externe_3}</li>
                            </ul>
                        </div>
                        <div className="uk-card-footer">
                            <a href={offer.url} className="uk-button uk-button-text">Read more</a>
                        </div>
                    </div>



                    <div className="entreprise ">
                        <div className="uk-card uk-card-default uk-width-1-1@m">
                            <div className="uk-card-header">
                                <div className="uk-grid-small uk-flex-middle" uk-grid>
                                    <div className="uk-width-auto">
                                        <img className="uk-border-square" width="40" height="40" src={entreprise.image_url}/>
                                    </div>
                                    <div className="uk-width-expand">
                                        <h3 className="uk-card-title uk-margin-remove-bottom">{entreprise.nom}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <div>
                                    <p>{entreprise.prenom_responsable_RH} {entreprise.nom_responsable_RH}</p>
                                    <p>{entreprise.post_responsable_RH}</p>
                                    <p>{entreprise.telephone_responsable_RH} </p>
                                    <p>{entreprise.adresse}</p>
                                    <p>{entreprise.adresse_suplémentaire}</p>
                                    <p>{entreprise.NPA} {entreprise.localite}</p>
                                    <p>Secteur</p>
                                    <p>{entreprise.secteur}</p>
                                    <p>Type d'entreprise</p>
                                    <p>{entreprise.type_entreprise}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>*/}
        </>


    )



}