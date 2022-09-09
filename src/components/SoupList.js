import React from "react";
import PropTypes from "prop-types";
import Soup from "./Soup";

function SoupList(props){
  return (
    <React.Fragment>
      {props.soupList.map((soup, index) =>
        <Soup name = {soup.name}
        price = {soup.price}
        quantity = {soup.quantity}
        key = {index} />
      )}
    </React.Fragment>
  );
}

SoupList.prototypes = {
  soupList: PropTypes.array
}

export default SoupList;