import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {

  const {offersCount, offerNames} = props;
  const onTitleClick = () => {};

  return (
    <Main
      offersCount={offersCount}
      offerNames={offerNames}
      onTitleClick={onTitleClick}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offerNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
