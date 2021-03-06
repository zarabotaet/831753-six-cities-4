import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Settings = {
  OFFERS_COUNT: 312,
};

const offers = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    descriptions: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
    The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera,
    but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    type: `Apartment`,
    owner: {
      url: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    },
    advantages: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cabel TV`,
    ],
    price: 128,
    url: `img/apartment-01.jpg`,
    urls: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/room.jpg`],
    starsCount: 4,
    bedroomsCount: 4,
    guestsCount: 8,
    isPremium: true,
    coordinates: [52.3809553943508, 4.939309666406198],
    id: 1,
  },
  {
    name: `Wood and stone place`,
    descriptions: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
    The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera,
    but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    type: `Private room`,
    owner: {
      url: `img/avatar-max.jpg`,
      name: `Max`,
      isSuper: true,
    },
    advantages: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Coffee machine`,
      `Cabel TV`,
    ],
    price: 80,
    url: `img/apartment-02.jpg`,
    urls: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/room.jpg`],
    starsCount: 4,
    bedroomsCount: 3,
    guestsCount: 6,
    isPremium: false,
    coordinates: [52.3809553943508, 4.939309666406198],
    id: 2,
  },
  {
    name: `Canal View Prinsengracht`,
    descriptions: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
    The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera,
    but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    type: `Apartment`,
    owner: {
      url: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: false,
    },
    advantages: [
      `Wi-Fi`,
      `Kitchen`,
      `Dishwasher`,
      `Towels`,
    ],
    price: 132,
    url: `img/apartment-03.jpg`,
    urls: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/room.jpg`],
    starsCount: 4,
    bedroomsCount: 2,
    guestsCount: 4,
    isPremium: false,
    coordinates: [52.3809553943508, 4.939309666406198],
    id: 3,
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    descriptions: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
    The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera,
    but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    type: `Apartment`,
    owner: {
      url: `img/avatar-max.jpg`,
      name: `Max`,
      isSuper: false,
    },
    advantages: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Towels`,
    ],
    price: 180,
    url: `img/room.jpg`,
    urls: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/room.jpg`],
    starsCount: 5,
    bedroomsCount: 1,
    guestsCount: 2,
    isPremium: true,
    coordinates: [52.3809553943508, 4.939309666406198],
    id: 4,
  },
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersCount={Settings.OFFERS_COUNT}
      offers={offers}
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
