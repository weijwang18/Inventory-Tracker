import React from "react";
import PropTypes from "prop-types";

function Soup(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSoupClicked(props.id)}>
        <h1>{props.name}</h1>
        <p>$ {props.price} </p>
        <p>Quantity: {props.quantity} </p>
      </div>
    </React.Fragment>
  );
}

Soup.prototype = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenSoupClicked: PropTypes.func
}

export default Soup;