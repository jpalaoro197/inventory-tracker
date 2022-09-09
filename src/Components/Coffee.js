import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.roast}</h3>
      <h3>${props.price}</h3>
      <p><em>Bean Origin{props.origin}</em></p>
      <p><em>Pounds Remaining:{props.stock}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  roast: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
};

export default Coffee;