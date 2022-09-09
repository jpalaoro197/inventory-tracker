import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail';
import EditCoffeeForm from './EditCoffeeForm';

  class CoffeeControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false ,
        mainCoffeeList: [] ,
        selectedCoffee: null
      };
      this.handleClick = this.handleClick.bind(this); //new code here
    }
    handleAddingNewCoffeeToList = (newCoffee) => {
      const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
      this.setState({mainCoffeeList: newMainCoffeeList,
                    formVisibleOnPage: false });
      }
      handleClick = () => {
        if (this.state.selectedCoffee!= null) {
          this.setState({
            formVisibleOnPage: false,
            selectedCoffee: null,
            editing: false
          });
        } else {
          this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage,
          }));
      }
    }
    handleChangingSelectedCoffee = (id) => {
      const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
      this.setState({selectedCoffee: selectedCoffee});
    }


  
    render() {
      let currentlyVisibleState = null;
      let buttonText = null;
  
      if (this.state.editing ) {      
        currentlyVisibleState = <EditCoffeeForm 
        selectedCoffee = {this.state.selectedCoffee} 
        onEditCoffee = {this.handleEditingCoffeeInList}/>
        buttonText = "Return to Coffee List";
      } else if (this.state.selectedCoffee != null) {
        currentlyVisibleState = <CoffeeDetail 
        selectedCoffee = {this.state.selectedCoffee} 
        onClickingDelete = {this.handleDeletingCoffee}
        onClickingEdit = {this.handleEditClick}  />
        buttonText = "Return to Coffee List";
      }
      else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
        buttonText = "Return to Coffee List";
      } 
      
      else {
        currentlyVisibleState = <CoffeeList 
          coffeeList={this.state.mainCoffeeList} 
          onCoffeeSelection={this.handleChangingSelectedCoffee}/>;
        buttonText = "Add New Coffee";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
        </React.Fragment>
      );
    }
  }

export default CoffeeControl;