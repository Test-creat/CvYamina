import React from "react";
import { Link } from "react-router-dom";

import { 
    MDBAvatar, 
    MDBRow, 
    MDBCol, 
    MDBCard, MDBCardUp,
    MDBCardBody, 
    MDBMask, 
    MDBIcon, 
    MDBView, 
    MDBBtn, 
    MDBAnimation 
} from "mdbreact";

import "./accueil.css";
import picture from "../pictures/photo.jpg";

class accueil extends React.Component {
    render() {
        return (

            <div className="classic-form-page" id="login">
                <MDBView className="light-text">
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBAnimation type="fadeInLeft" delay=".3s" className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                            <MDBRow >
                                <MDBCol>
                                    <MDBCard testimonial>
                                        <MDBCardUp className='orange darken-3' />
                                        <MDBAvatar className='mx-auto white'>
                                            <img src={picture} alt='' />
                                        </MDBAvatar>
                                        <MDBCardBody>
                                            <h4 className='card-title'>Yamina NAIT AMER</h4>
                                            <h6 className="h6-responsive font-weight-bold">Directrice de centre de profit</h6>
                                            <hr className="hr-light" />
                                            <p> <MDBIcon icon='quote-left' />
                                            {' '}Très investie « challengeuse » j’ai toujours à cours de mener à bien les missions 
                                            confiées avec haut niveau d’exigence dans un objectif de résultats.{' '}
                                            <MDBIcon icon='quote-right' /> </p>
                                        </MDBCardBody>
                                        <Link id="btn" to={'/navBar'}><MDBBtn color="orange"><span> Mon CV </span></MDBBtn></Link>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBAnimation>
                    </MDBMask>
                </MDBView>
            </div>
     
        );
    }
}

export default accueil;