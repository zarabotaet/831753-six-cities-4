import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Data = {
  OFFERS_COUNT: 312,
};

ReactDOM.render(
    <App
      offersCount={Data.OFFERS_COUNT}
    />,
    document.querySelector(`#root`)
);

