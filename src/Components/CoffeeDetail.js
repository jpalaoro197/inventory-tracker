import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee } = props;

  return (
    <React.Fragment>
        <h1>Coffee Details</h1>
        <h3>{coffee.name} - {coffee.roast}</h3>
        <p><em>{coffee.stock}</em></p>
        { coffee.stock > 0 ? <button id="mainBtn" onClick= {props.removePound}>Sell Pound</button> : null}
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  removePound: PropTypes.func,

};

export default CoffeeDetail;