import React from "react";
import Header from "./Header";
import CoffeeControl from "./CoffeeControl";

function App(props){
  const appStyles = {
    margin: '25px'
  }
  return ( 
    <div style={appStyles}>
      <React.Fragment>
        <Header />
        <CoffeeControl />
      </React.Fragment>
    </div>
  );
}

export default App;