import React from "react";

import { MDBAnimation,
  MDBCarousel, 
  MDBCarouselInner, 
  MDBCarouselItem, 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBCard, 
  MDBCardImage,
  MDBCardBody, 
  MDBCardTitle, 
  MDBCardText
} from "mdbreact";

const MultiCarouselPage = () => {

  return (
    <div id="noFond">
      <MDBContainer>
        <MDBCarousel activeItem={1} length={1} slide={true} showControls={false} showIndicators={false} multiItem interval={false}>
          <MDBCarouselInner>
            <MDBRow>

              <MDBCarouselItem itemId="1">
              <MDBAnimation type="fadeInLeft" delay=".3s">
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/info.png')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center"> COMPETENCES INFORMATIQUE : </MDBCardTitle>
                      <MDBCardText>
                        - Environnement Windows <br/>
                        - MS Dos <br/>
                        – Très bonne maitrise d’Excel, Power Point et Word.<br/>
                        - Photoshop <br/>
                        - Outlook, Access, Publisher et Internet<br/>
                        - Informatique Web création de site internet<br/>
                        - Utilisation du logiciel de gestion des flux marchandises : GOLD.
                      </MDBCardText>

                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/qualite.jpg')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center"> LANGUES / LOISIRS / QUALITES </MDBCardTitle>
                      <MDBCardText> LANGUES :<br/>
                      - Français et	Kabyle (langues maternelles) <br/>
                      - Anglais : lu +++, écrit ++, parlé +<br/>
                      - Italien : notions, perfectible.<br/>
                      LOISIRS:<br/>
                      Théâtre. Musique. Lecture.<br/>
                      QUALITES:<br/>
                      Réfléchie, dynamique, souriante, ponctuelle, rigoureuse et autonome.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={require('../pictures/manager.jpg')} />
                    <MDBCardBody>
                      <MDBCardTitle align="center">QUALITÉS MANAGÉRIALES</MDBCardTitle>
                      <MDBCardText> -Attentive à chaque membre de l’équipe.<br/>
                      - Identifier des potentiels et les faire grandir.<br/>
                      - Créer des	opportunités	de croissance.<br/>
                      - Donner des explications et fixer des objectifs<br/>
                      - Faire un feedback régulier et fournir une aide précieuse.<br/>
                      - Reconnaître quand le travail est bien fait et rendre l’équipe responsable de sa réussite.<br/>
                      - Gestion de crise avec diplomatie.<br/>
                      - Fédérer et rassembler les équipes.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                </MDBAnimation>
              </MDBCarouselItem>

            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
}

export default MultiCarouselPage;