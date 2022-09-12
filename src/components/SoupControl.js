import React from "react";
import NewSoupForm from "./NewSoupForm";
import SoupList from "./SoupList";

class SoupControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnpage: false,
      mainSoupList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewSoupToList = (newSoup) => {
    const newMainSoupList = this.state.mainSoupList.concat(newSoup);
    this.setState({mainSoupList: newMainSoupList,
                  formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewSoupForm onNewSoupCreation={this.handleAddingNewSoupToList}/>;
      buttonText = "Return to Soup List";
    } else { 
      currentlyVisibleState = <SoupList soupList = {this.state.mainSoupList} />;
      buttonText = "Add Soup Order";
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