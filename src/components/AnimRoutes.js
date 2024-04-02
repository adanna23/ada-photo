import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

//import pages
import Options from "../pages/Options";
import Exhibitions from "../pages/Exhibitions";
import Personal from "../pages/Personal";
import Contact from "../pages/Contact";
import Ihunanya from "../pages/Ihunanya";
import Travel from "../pages/Travel";
import Ndibe from "../pages/Ndibe";
import Afikpo from "../pages/Afikpo";

const AnimRoutes = () => {
  return (
    <Switch>
      <Route path="/options" elements={<Options />} />
      <Route path="/exhibitions" elements={<Exhibitions />} />
      <Route path="/ihunanaya" elements={<Ihunanya />} />
      <Route path="/personal" elements={<Personal />} />
      <Route path="/contact" elements={<Contact />} />
      <Route path="/travel" elements={<Travel />} />
      <Route path="/ndibe" elements={<Ndibe />} />
      <Route path="/afikpo" elements={<Afikpo />} />
    </Switch>
  );
};

export default AnimRoutes;
