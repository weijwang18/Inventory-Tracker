import React from "react";
import PropTypes from "prop-types";
import Soup from "./Soup";

function SoupList(props){
  return (
    <React.Fragment>
      {props.soupList.map((soup) =>
        <Soup 
        whenSoupClicked = { props.onSoupSelection }
        name = {soup.name}
        price = {soup.price}
        quantity = {soup.quantity}
        id = {soup.id}
        key = {soup.id} />
      )}
    </React.Fragment>
  );
}

SoupList.propTypes = {
  soupList: PropTypes.array,
  onSoupSelection: PropTypes.func
}

export default SoupList;