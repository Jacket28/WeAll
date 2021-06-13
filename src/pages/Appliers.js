import React, {useState} from "react";
import {Backend} from "../services/backend";
import {Offer} from "../components/Offer";
import {Cv} from "../components/Cv";


export const Appliers = () => {
    const [appliers, setAppliers] = useState([]);
    const [clickedApplier, setClickedApplier] = useState([]);
    //const [softskills, setSoftskills] = useState([]);


    React.useEffect(() => {
        Backend.getPostulants().then((p) => {
            setAppliers(p);
        });
    }, []);

    return(
        <>
            <div className="container uk-grid">
                <div className="offerList uk-width-1-4">
                    <div className="uk-flex uk-flex-column uk-width-1-1" >
                        {appliers ?
                            appliers.map((applier) => {
                                return (
                                    <div  onClick={() => {
                                        setClickedApplier(applier);
                                    }}>
                                        <div className="uk-card uk-card-default uk-card-hover uk-card-body etiquettes">
                                            <h3 className="uk-card-title">Profil {applier.id_postulant}</h3>
                                            <p>{applier.sexe}</p>
                                        </div>
                                    </div>
                                );
                            }) : null }
                    </div>
                </div>
                <div className="cv uk-width-3-4">
                    {clickedApplier && appliers ? (<Cv applier={clickedApplier}></Cv>) : null}
                </div>
            </div>
        </>
    )
}