import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form id="formStyle" onSubmit={props.formSubmissionHandler}>
      
          <input
            className="mx-3"
            type='text'
            name='roast'
            placeholder='roast' />
          <input
            className="mx-3"
            type='text'
            name='name'
            placeholder='name' />
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