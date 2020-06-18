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
  it(`onCardHover argument is the card id?`, () => {

    const onCardHover = jest.fn();

    const component = shallow(
        <OfferCard
          offer={offer}
          onCardHover={onCardHover}
          onTitleClick={() => { }}
        />
    );

    component.simulate(`mouseover`);

    expect(onCardHover).toHaveBeenCalledWith(offer.id);
  });

  it(`Is the onTitleClick called when the header is clicked?`, () => {

    const onTitleClick = jest.fn();

    const component = shallow(
        <OfferCard
          offer={offer}
          onCardHover={() => { }}
          onTitleClick={onTitleClick}
        />
    );

    const titleLink = component.find(`.place-card__link`);

    titleLink.simulate(`click`);

    expect(onTitleClick).toBeCalledTimes(1);
  });
});
