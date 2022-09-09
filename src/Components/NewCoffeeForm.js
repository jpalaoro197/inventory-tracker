import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      roast: event.target.roast.value, 
      name: event.target.name.value, 
      price: event.target.price.value,
      origin: event.target.origin.value, 
      stock: event.target.stock.value,
      id: v4()
    });
    NewCoffeeForm.propTypes = {
      onNewCoffeeCreation: PropTypes.func,
      buttonText: PropTypes.string,
  }
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Coffee Name' />
        <input
          type='text'
          name='roast'
          placeholder='Roast' />
        <input
          type='text'
          name='origin'
          placeholder='Coffee Origin' />
        <input
          type='number'
          name='price'
          placeholder='Price Per Pound' />
          <input
          type='number'
          name='stock'
          placeholder='Pounds left' />

        <button type='submit'>Add New Coffee!</button>
      </form>
    </React.Fragment>
  );
  
}

export default NewCoffeeForm;