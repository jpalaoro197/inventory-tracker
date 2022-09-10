import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - {props.roast}</h3>
        <p><em>Origin: {props.origin}</em></p>
        <p><em>Price:${props.price}.00</em></p>
        <p><em>pounds remaining: {props.stock}</em></p>
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
  id: PropTypes.string,
  stock: PropTypes.number,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;