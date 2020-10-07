import React from 'react';
import './App.css';
import FormComponent from "./FormComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./logo.png")} alt="" className="logo" />
        <div className="buttonContainer">
          <a className="aLink">New to Applylance?</a>
          <a className="signupButton ">Sign Up</a>
        </div>
      </header>  <FormComponent />
    </div>
  );
}

export default App;
