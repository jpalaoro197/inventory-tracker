import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
      <h3>{props.name} - {props.roast}</h3>
      <h3>${props.price}</h3>
      <p><em>Bean Origin{props.origin}</em></p>
      <p><em>Pounds Remaining:{props.stock}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  roast: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: Proptypes.func
};

export default Coffee;