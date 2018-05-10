import React, { Component } from "react";
import logo from "./logo.svg";
import dogLogo from "./assets/white-dog.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="tc sans-serif roboto">
        <header className="moon-grays flex bb">
          <img src={dogLogo} className="App-logo" alt="logo" />
          <h1 className="mid-gray pl3 f3">Lauren Suh</h1>
        </header>
        <p className="light-red">Hello Welcome to my second react app</p>
      </div>
    );
  }
}

export default App;
