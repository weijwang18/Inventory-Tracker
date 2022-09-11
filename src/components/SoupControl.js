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

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnpage){
      currentlyVisibleState = <NewSoupForm />
    } else { 
      currentlyVisibleState = <SoupControl />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default SoupControl;