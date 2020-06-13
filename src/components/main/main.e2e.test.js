import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`Should title be pressed`, () => {

  const onTitleClick = jest.fn();

  const component = shallow(
      <Main
        offersCount={Data.OFFERS_COUNT}
        offerNames={Data.OFFER_NAMES}
        onTitleClick={onTitleClick}
      />
  );

  const titleLinks = component.find(`.place-card__link`);
  const titleLinksCount = titleLinks.length;

  titleLinks.forEach((titleLink) => {
    titleLink.simulate(`click`);
  });

  expect(onTitleClick.mock.calls.length).toBe(titleLinksCount);
});
