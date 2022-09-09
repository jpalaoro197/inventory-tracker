import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.roast}</h3>
      <h3>${props.price}</h3>
      <p><em>{props.origin}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  roast: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
};

export default Coffee;