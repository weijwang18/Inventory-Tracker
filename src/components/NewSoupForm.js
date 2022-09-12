import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewSoupForm(props){
  return (
    <React.Fragment>
        <form onSubmit={handleNewSoupFormSubmission}>
          <input
            type = 'text'
            name = 'name' 
            placeholder = 'Name' />
          <input
            type = "number"
            name = 'quantity' 
            placeholder = 'Quantity' />
          <input
           type = "number"
           name = 'price'
           placeholder = 'Price' />
          <button type='submit'>Submit</button>
        </form>
    </React.Fragment>
  );
  

  function handleNewSoupFormSubmission(event) {
    event.preventDefault();
    props.onNewSoupCreation({
      name: event.target.name.value, 
      quantity: event.target.quantity.value, 
      price: event.target.price.value, 
      id: v4()
    });
  }
};
  NewSoupForm.propTypes = {
    onNewSoupCreation: PropTypes.func,
  };

export default NewSoupForm;