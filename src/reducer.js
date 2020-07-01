import cities from "./mocks/cities.js";
import {extend} from "./utils.js";

const initialState = {
  city: cities[0].name,
  offers: cities[0].offers,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

const createCityAction = (city) => {
  return {
    type: ActionType.CHANGE_CITY,
    payload: city,
  };
};

const createOffersAction = (city) => {
  return {
    type: ActionType.GET_OFFERS,
    payload: cities.find((item) => {
      return item.name === city;
    }).offers,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
  }

  return state;
};


export {reducer, ActionType, createCityAction, createOffersAction};
