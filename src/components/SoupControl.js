import React from "react";
import NewSoupForm from "./NewSoupForm";
import SoupList from "./SoupList";
import SoupDetail from './SoupDetail';

class SoupControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnpage: false,
      mainSoupList: [],
      selectedSoup: null
    };
  }

  handleClick = () => {
    if (this.state.selectedSoup != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSoup: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedSoup = (id) => {
    const selectedSoup = this.state.mainSoupList.filter(soup => soup.id === id)[0];
    this.setState({selectedSoup: selectedSoup});
  }

  handleAddingNewSoupToList = (newSoup) => {
    const newMainSoupList = this.state.mainSoupList.concat(newSoup);
    this.setState({mainSoupList: newMainSoupList,
                  formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedSoup != null) {
      currentlyVisibleState = <SoupDetail soup = {this.state.selectedSoup} />
      buttonText = "Return to Soup List";}
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewSoupForm onNewSoupCreation={this.handleAddingNewSoupToList}/>;
      buttonText = "Return to Soup List";
    } else { 
      currentlyVisibleState = <SoupList soupList = {this.state.mainSoupList} onSoupSelection={this.handleChangingSelectedSoup} />;
      buttonText = "Add Soup";
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