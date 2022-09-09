import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";


function CoffeeList(props) { // Add props as parameter.
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee, index) => // Loop through the list passed down from CoffeeControl.
        <Coffee roast={coffee.roast}
        whenCoffeeClicked={props.onCoffeeSelection}
          name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          stock={coffee.stock}
          key={coffee.id}
          id={coffee.id} />
      )}
    </React.Fragment>
  );
}

// Add propTypes for coffeeList.
CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;