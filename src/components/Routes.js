import React from "react";
import {Route, Switch} from "react-router-dom";

import accueil from "./accueil";
import navBar from "./navBar";

import contact from "./contact";
import competence from "./competence";
import experience from "./experience";
import formation from "./formation";


class Routes extends React.Component {
    render() {
        return(
          <Switch>
            {/*ACCUEIL*/}
            <Route path={"/"} component={accueil} exact />

            {/*NAVBAR*/}
            <Route path={"/navBar"} component={navBar} exact />

            {/*CONTACT*/}
            <Route path={"/contact"} component={contact} exact />

            {/*COMPETENCE*/}
            <Route path={"/competence"} component={competence} exact />

            {/*EXPERIENCE*/}
            <Route path={"/experience"} component={experience} exact />  

            {/*FORMATION*/}
            <Route path={"/formation"} component={formation} exact /> 

          </Switch>
        )
    }
}

export default Routes;