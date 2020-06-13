import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      offersCount={Data.OFFERS_COUNT}
      offerNames={Data.OFFER_NAMES}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
