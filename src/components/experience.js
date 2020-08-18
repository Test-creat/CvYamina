import React from "react";

import { MDBTimeline, 
    MDBTimelineStep, 
    MDBIcon, 
    MDBAnimation,
    MDBContainer
} from "mdbreact";

import BackToTop from "react-back-to-top-button";

const TimelinePage = () => {

  return (
    <MDBContainer>
        <div id="exp">
            <MDBAnimation type="zoomIn" delay=".3s">
                <MDBTimeline responsive>

                    <MDBTimelineStep colorful hoverable color="white" label=" ">
                        <img src={require('../pictures/monoprix.jpg')} className="img-fluid" alt="" />
                        <h4 className="font-weight-bold p-4 mb-0 white-text"> MONOPRIX Paris - Directrice de centre de profit </h4>
                        <p className="white-text text-muted px-4 mb-0"><MDBIcon icon="clock" /> Novembre 2018 - à ce jour </p>

                        <p className="white-text mb-0 p-4">
                        <MDBIcon  icon="caret-right" />	Gestion opérationnelle et financière du centre de profit (suivi du compte d’exploitation, élaboration du budget et mouvement structurels du magasin)<br/>
                        <MDBIcon  icon="caret-right" />	Garant du savoir-faire, des valeurs de l’entreprise, de la qualité du service et de la relation client.<br/>
                        <MDBIcon  icon="caret-right" />	Conseil en stratégie commerciale, élaboration de business plans et de stratégies de développement des ventes.<br/>
                        <MDBIcon  icon="caret-right" />	Respect de la politique commerciale et de la réglementation économique en général et de la législation sociale (conditions de travail, bon
                        fonctionnement des organismes représentatifs…).<br/>
                        <MDBIcon  icon="caret-right" />	Recruter former et évaluer les collaborateurs.<br/>
                        <MDBIcon  icon="caret-right" />	Gérer et négocier avec les instances représentatives du personnel.<br/>
                        <MDBIcon  icon="caret-right" />	Encadrer, animer, fédérer les équipes de ventes dans un dynamisme commerciale de performance.<br/>
                        <MDBIcon  icon="caret-right" />	Planifier, organiser par un management bienveillant et accompagner le changement.
                        </p>
                    </MDBTimelineStep>

                    <MDBTimelineStep colorful inverted hoverable color="white" label=" ">
                        <img src={require('../pictures/mesdepanneurs.jpg')} className="img-fluid" alt="" />
                        <h4 className="font-weight-bold p-4 mb-0 white-text">
                        MesDépanneurs.fr (Start up) ENGIE - Responsable Opérationnelle (Stage en alternance)</h4>
                        <p className="white-text text-muted px-4 mb-0"><MDBIcon icon="clock" /> Novembre 2017 - Juin 2018 </p>

                        <p className="white-text mb-0 p-4">
                        Gestion des RH<br/>
                        <MDBIcon  icon="caret-right" />	Analyse des besoins, recrutement, accueil, intégration, entretiens individuels<br/>
                        <MDBIcon  icon="caret-right" />	Mise en place d’un règlement intérieur et création d’un livret d’accueil<br/>
                        <MDBIcon  icon="caret-right" />	Mise en place d’un plan de formation professionnelle et de la GPEC<br/>
                        <MDBIcon  icon="caret-right" />	Formation et accompagnement des managers opérationnels aux recrutements<br/>
                        <MDBIcon  icon="caret-right" />	Accompagnement au changement dans le cadre du rachat de l’entreprise<br/>
                        <MDBIcon  icon="caret-right" />	Tutorat de stagiaires en BTS AM<br/>
                        <MDBIcon  icon="caret-right" />	Réalisation des rapports mensuels pour les partenaires (MAIF et FIDELIA)<br/>
                        <MDBIcon  icon="caret-right" />	Réalisation de veille commerciale et concurrentielle<br/>
                        <MDBIcon  icon="caret-right" />	Réalisation de plans d’action<br/>
                        <MDBIcon  icon="caret-right" />	Gestion de budgets de formation et de recrutement<br/>
                        <MDBIcon  icon="caret-right" />	rédaction de cahier des charges
                        </p>
                    </MDBTimelineStep>

                    <MDBTimelineStep colorful hoverable color="white" label=" ">
                        <img src={require('../pictures/monoprix.jpg')} className="img-fluid" alt="" />
                        <h4 className="font-weight-bold p-4 mb-0 white-text"> MONOPRIX Paris - Chef de Caisse Accueil </h4>
                        <p className="white-text text-muted px-4 mb-0"> <MDBIcon icon="clock" /> Novembre 2007 - Septembre 2017 </p>
                        
                        <p className="white-text mb-0 p-4">
                        <MDBIcon  icon="caret-right" />	Management de l’équipe<br/>
                        <MDBIcon  icon="caret-right" />	Management de La relation client<br/>
                        <MDBIcon  icon="caret-right" />	Management de projet
                        </p>
                    </MDBTimelineStep>
                    
                </MDBTimeline>
            </MDBAnimation>
        </div>  
        <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint">
        <MDBIcon icon="chevron-up" className="white-text" />
      </BackToTop>
    </MDBContainer>
  );
};

export default TimelinePage;