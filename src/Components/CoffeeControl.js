import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';

  class CoffeeControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false ,
        mainCoffeeList: [] ,
      };
      this.handleClick = this.handleClick.bind(this); //new code here
    }
    handleAddingNewCoffeeToList = (newCoffee) => {
      const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
      this.setState({mainCoffeeList: newMainCoffeeList,
                    formVisibleOnPage: false });
      }
    handleClick() {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }


  
    render(){
      let currentlyVisibleState = null;
      let buttonText = null; // new code
      if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>;
        buttonText = "Return to Coffee List"; // new code
      } else {
        currentlyVisibleState = <CoffeeList coffeeList ={this.state.mainCoffeeList} />;
        buttonText = "Add Coffee"; // new code
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