import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Data = {
  OFFERS_COUNT: 312,
  OFFER_NAMES: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and beautiful place`,
  ],
};

ReactDOM.render(
    <App
      offersCount={Data.OFFERS_COUNT} offerNames={Data.OFFER_NAMES}
    />,
    document.querySelector(`#root`)
);

