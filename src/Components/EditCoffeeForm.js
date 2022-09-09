import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm(props) {
  const { selectedCoffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value.charAt(0).toUpperCase() + event.target.name.value.slice(1),
      roast: event.target.roast.value.charAt(0).toUpperCase() + event.target.roast.value.slice(1),

      name: event.target.name.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      stock: parseInt(event.target.stock.value),
      id: selectedCoffee.id
    });

  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Coffee" />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  selectedCoffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;