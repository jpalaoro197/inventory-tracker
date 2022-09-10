import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form id="formStyle" onSubmit={props.formSubmissionHandler}>
      
          <input
            className="mx-3"
            type='text'
            name='name'
            placeholder='Name' />
          <input
            className="mx-3"
            type='text'
            name='roast'
            placeholder='Roast' />
            <input
            className="mx-3"
            type='text'
            name='origin'
            placeholder='Origin' />
          <input
            className="mx-3"
            type='number'
            name='price'
            placeholder='Price per pound' />

          <button id="mainBtn"type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.prototype = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;