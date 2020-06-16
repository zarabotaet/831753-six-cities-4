import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersCount={Data.OFFERS_COUNT}
      offerNames={Data.OFFER_NAMES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
