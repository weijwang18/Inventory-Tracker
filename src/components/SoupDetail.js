import React from "react";
import PropTypes from "prop-types";

function SoupDetail(props){
    const { soup } = props;

    return (
      <React.Fragment>
        <h1>Soup Detail</h1>
        <h1>{soup.name}</h1>
        <p>$ {soup.price} </p>
        <p>Quantity: {soup.quantity} </p>
        <hr/>
      </React.Fragment>
    );
  }
  
  SoupDetail.propTypes = {
    soup: PropTypes.object
  };

export default SoupDetail;