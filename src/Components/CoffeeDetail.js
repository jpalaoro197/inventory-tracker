import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { selectedCoffee, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <hr/>
      <h3>{selectedCoffee.name} <sup>$</sup>{selectedCoffee.price}</h3>
      <p>Roast: {selectedCoffee.roast}</p>
      <p>Pounds left: {selectedCoffee.stock}</p>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={()=> onClickingDelete(selectedCoffee.id) }>Delete Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  selectedCoffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default CoffeeDetail;