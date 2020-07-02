import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import OfferPage from "../offer-page/offer-page.jsx";

const App = ({cities}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main
          cities={cities}
        />
      </Route>
      <Route exact path="/offers/:id" component={OfferPage} />
    </Switch>
  </BrowserRouter>
);


App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
};

export default App;
