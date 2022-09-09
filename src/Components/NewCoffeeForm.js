import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      roast: event.target.roast.value, 
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input
          type='text'
          name='roast'
          placeholder='Pair Names' />
        <input
          type='text'
          name='name'
          placeholder='Location' />
        <textarea
          name='origin'
          placeholder='Describe your origin.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
  NewCoffeeForm.propTypes = {
    onNewCoffeeCreation: PropTypes.func
}
}

export default NewCoffeeForm;