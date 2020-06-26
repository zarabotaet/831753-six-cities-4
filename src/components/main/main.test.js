import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const Settings = {
  OFFERS_COUNT: 312,
};

const offers = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    url: `img/apartment-01.jpg`,
    starsCount: 4,
    isPremium: true,
    coordinates: [52.3809553943508, 4.939309666406198],
    id: 1,
  },
  {
    name: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    url: `img/apartment-02.jpg`,
    starsCount: 4,
    isPremium: false,
    coordinates: [52.3809553943508, 4.939309666406198],
    id: 2,
  },
  {
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    url: `img/apartment-03.jpg`,
    starsCount: 4,
    isPremium: false,
    coordinates: [52.3809553943508, 4.939309666406198],
    id: 3,
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    url: `img/room.jpg`,
    starsCount: 5,
    isPremium: true,
    coordinates: [52.3809553943508, 4.939309666406198],
    id: 4,
  },
];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      offersCount={Settings.OFFERS_COUNT}
      offers={offers}
      onCardTitleClick={() => {}}
    />,
    {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
