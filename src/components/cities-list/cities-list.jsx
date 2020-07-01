import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createCityAction, createOffersAction} from "../../reducer.js";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const getCityClassName = (city) => {
    return props.city === city
      ? `locations__item-link tabs__item tabs__item--active`
      : `locations__item-link tabs__item`;
  };

  const handleCityClick = (city) => {
    props.createCityAction(city.name);
    props.createOffersAction(city.name);
  };

  const getCitiesMarkup = () => {
    return props.cities.map((city) => {
      return (
        <li key={city.id} className="locations__item">
          <a className={getCityClassName(city.name)} onClick={() => handleCityClick(city)}>
            <span>{city.name}</span>
          </a>
        </li>
      );
    });
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {getCitiesMarkup()}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  createCityAction: PropTypes.func.isRequired,
  createOffersAction: PropTypes.func.isRequired,
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({createCityAction, createOffersAction}, dispatch);
};

export {CitiesList};
export default connect(null, matchDispatchToProps)(CitiesList);
