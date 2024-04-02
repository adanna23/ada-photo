import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Model from "./pages/Model";
//components
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
//Styles
import "./App.scss";
import Options from "./pages/Options";
import Exhibitions from "./pages/Exhibitions";
import Ihunanya from "./pages/Ihunanya";
import Travel from "./pages/Travel";
import Personal from "./pages/Personal";
import Ndibe from "./pages/Ndibe";
import Afikpo from "./pages/Afikpo";
import Pictures from "./pages/Pictures";

function App() {
  const imageDetails = {
    width: 424,
    height: 650,
  };

  return (
    <Router>
      <Header />
      <AnimRoutes />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} mode="wait">
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path="/model/:id"
                render={() => <Model imageDetails={imageDetails} />}
              />
              <Route exact path="/options" render={() => <Options />} />
              <Route exact path="/exhibitions" render={() => <Exhibitions />} />
              <Route exact path="/ihunanya" render={() => <Ihunanya />} />
              <Route exact path="/travel" render={() => <Travel />} />
              <Route exact path="/personal" render={() => <Personal />} />
              <Route exact path="/ndibe" render={() => <Ndibe />} />
              <Route exact path="/afikpo" render={() => <Afikpo />} />
              <Route exact path="/pictures" render={() => <Pictures />} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
