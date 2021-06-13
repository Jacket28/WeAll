import "./Offers.css";
import { Backend } from "../services/backend";
import React, {useState} from "react";
import {Offer} from "../components/Offer";


export const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [clickedOffer, setClickedOffer] = useState([]);
    const [entreprise, setEntreprise] = useState([]);

    // récupère la liste des offres
    React.useEffect(() => {
        Backend.getOffers().then((offre) => {
            setOffers(offre);
        });
    }, []);

    // récupère l'entreprise d'une offre
    React.useEffect(() => {
        Backend.getEnterprise(clickedOffer?.id_entreprise).then((entreprise) => {
            setEntreprise(entreprise[0]);
        });
    }, [clickedOffer]);


    return (
        <>
            <div className="container uk-grid">
                <div className="offerList uk-width-1-4">
                    <div className="uk-flex uk-flex-column uk-width-1-1" >
                        {offers ?
                        offers.map((offer) => {
                            return (
                                <div  onClick={() => {
                                    setClickedOffer(offer);
                                }}>
                                    <div className="uk-card uk-card-default uk-card-hover uk-card-body etiquettes">
                                        <h3 className="uk-card-title">{offer.nom} ({offer.taux})</h3>
                                        <p>{offer.contrat}</p>
                                    </div>
                                </div>
                            );
                        }) : null }
                    </div>
                </div>
                <div className="offerDetails uk-width-3-4">
                    {clickedOffer && entreprise ? (<Offer offer={clickedOffer} entreprise={entreprise}></Offer>) : null}
                </div>
            </div>
        </>
    )

}