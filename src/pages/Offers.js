import "./Offers.css";
import {Backend} from "../services/backend";
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

            <div id="offerContent" className="uk-grid">
                <div id="offersList" className="uk-width-1-5">
                    <div className="uk-flex-column">
                        {offers ?
                            offers.map((offer) => {
                                return (
                                    <div onClick={() => {
                                        setClickedOffer(offer);
                                    }}>
                                        <div className="etiquettes uk-card uk-card-default uk-card-hover uk-card-body">
                                            <h4 className="uk-card-title">{offer.nom} ({offer.taux})</h4>
                                            <p>{offer.contrat}</p>
                                        </div>
                                    </div>
                                );
                            }) : null }
                    </div>
                </div>
                <div id="offerDetails" className="uk-width-4-5">
                    {clickedOffer && entreprise ? (<Offer offer={clickedOffer} entreprise={entreprise}></Offer>) : null}
                </div>
            </div>

        </>
    )
}