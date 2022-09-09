import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - {props.roast}</h3>
        <p><em>pounds remaining: {props.stock}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  roast: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  stock: PropTypes.number,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;