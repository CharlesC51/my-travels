import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travels</h1>
        </header>
        <Travel
          destination="Paris"
          country="France"
          photo="https://www.the-travelearner.com/wp-content/uploads/2018/07/eiffel-tower-paris-p-2.jpg"
          distance="120km environs"
        />
        <Travel
          destination="Tokyo"
          country="Japan"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Tokyo_Tower_and_around_Skyscrapers.jpg/220px-Tokyo_Tower_and_around_Skyscrapers.jpg"
          distance="à l'autre bout du monde !"
        />
      </div>
    );
  }
}

export default App;
