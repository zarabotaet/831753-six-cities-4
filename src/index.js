import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import App from "./components/app/app.jsx";
import mockCities from "./mocks/cities.js";

const cities = mockCities.map((city) => {
  return {
    name: city.name,
    id: city.id,
  };
});

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App cities={cities} />
    </Provider>,
    document.querySelector(`#root`)
);

