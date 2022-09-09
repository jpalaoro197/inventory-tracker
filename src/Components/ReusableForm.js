import React from "react";
import PropTypes from 'prop-types';

function ReusableForm(props){
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
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;