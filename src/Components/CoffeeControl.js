import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail';
// import EditCoffeeForm from './EditCoffeeForm';

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null
    };
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(soda => soda.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false });
  }

  handleRemoveCan = () => {
    const selectedCoffee = this.state.selectedCoffee;
    const remove = Object.assign({}, selectedCoffee, {quantity: selectedCoffee.quantity - 1});
    const editMainCoffee = this.state.mainCoffeeList
      .filter(soda => soda.id !== this.state.selectedCoffee.id)
      .concat(remove);
    this.setState({
      mainCoffeeList: editMainCoffee,
      selectedCoffee: remove
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail soda = {this.state.selectedCoffee} removeCan = {this.handleRemoveCan}/>
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}  />;
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleState = <CoffeeList sodaList={this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee} />;
      buttonText = "Add Coffee";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <div className="d-flex flex-row justify-content-center">
          <button id="mainBtn" onClick={this.handleClick}>{buttonText}</button>
        </div> 
      </React.Fragment>
    );
  }

}

export default CoffeeControl;