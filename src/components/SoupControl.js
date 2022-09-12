import React from "react";
import NewSoupForm from "./NewSoupForm";
import SoupList from "./SoupList";

class SoupControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnpage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnpage){
      currentlyVisibleState = <NewSoupForm />;
      buttonText = "Return to Soup List";
    } else { 
      currentlyVisibleState = <SoupList />
      buttonText = "Add Soup Order"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default SoupControl;