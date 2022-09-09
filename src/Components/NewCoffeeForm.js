import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

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
}
return (
  <React.Fragment>
    <ReusableForm
      formSubmissionHandler={handleNewCoffeeFormSubmission}
      buttonText="Add Coffee!" />
  </React.Fragment>
);
}

NewCoffeeForm.propTypes = {
onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;