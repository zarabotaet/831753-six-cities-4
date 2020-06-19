import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const offer = {
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  url: `img/apartment-01.jpg`,
  starsCount: 4,
  isPremium: true,
  id: 1,
};

it(`Should OfferCard render correctly`, () => {
  const tree = renderer
    .create(<OfferCard
      offer={offer}
      onCardHover={() => {}}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
