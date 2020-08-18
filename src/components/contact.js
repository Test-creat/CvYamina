import React from "react";
import "../index.css";

import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
  MDBCard, MDBCardBody, MDBCardText,
  MDBAnimation,
} from "mdbreact";

class Contact extends React.Component {
  render() {
    return(
      <MDBContainer>
        <MDBRow id="card1">

          <MDBCol>
              <MDBAnimation type="fadeInLeft" delay=".3s">
                <MDBCard id="classic-card">
                  <MDBCardBody className="white-text">

                    <h3 className="text-center"><MDBIcon icon="user" /> Yamina NAIT AMER</h3>
                    <hr className="hr-light" /><hr/>

                    <MDBCardText className="white-text">
                    <p><MDBIcon icon="mobile" /> 06.14.72.36.68 </p><hr/>
                    <p><MDBIcon icon="envelope" /> nait_sy@yahoo.fr</p><hr/>
                    </MDBCardText>

                    <hr className="hr-light" /><hr/>

                    <h6 className="mb-4">
                      A la fois femme de réflexion et de communication, je reste avant tout une femme de terrain, 
                      commerçante par nature pragmatique. Dotée, d’une forte culture de mode et du service, appuyée 
                      par de réelles mises en pratique, de solides valeurs et une éthique irréprochable, ma vision de 
                      l’entreprise s’oriente naturellement autour des hommes qui la font vivre et se mobilisant quotidiennement 
                      autour de projets. Très investie « challengeuse » j’ai toujours à cours de mener à bien les missions confiées 
                      avec haut niveau d’exigence dans un objectif de résultats.
                    </h6><hr/>

                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>

        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Contact;    