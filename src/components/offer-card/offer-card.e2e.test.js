import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const offer = {
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  url: `img/apartment-01.jpg`,
  starsCount: 4,
  isPremium: true,
  id: 1,
};

describe(`card tests`, () => {
  it(`handleCardHover argument is the card id?`, () => {

    const handleCardHover = jest.fn();

    const component = shallow(
        <OfferCard
          offer={offer}
          handleCardHover={handleCardHover}
          handleCardTitleClick={() => { }}
        />
    );

    component.simulate(`mouseover`);

    expect(handleCardHover).toHaveBeenCalledWith(offer.id);
  });

  it(`Is the handleCardTitleClick called when the header is clicked?`, () => {

    const handleCardTitleClick = jest.fn();

    const component = shallow(
        <OfferCard
          offer={offer}
          handleCardHover={() => { }}
          handleCardTitleClick={handleCardTitleClick}
        />
    );

    const titleLink = component.find(`.place-card__link`);

    titleLink.simulate(`click`);

    expect(handleCardTitleClick).toBeCalledTimes(1);
  });
});
