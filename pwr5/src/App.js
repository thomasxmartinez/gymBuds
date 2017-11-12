import React, { Component } from 'react';
import './App.css';
import GymBuddy from '/Users/tommytnez/Desktop/api/pwr5/pwr5/src/components/GymBuddy.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>PWR5</h1>
        <div className="header-bar" />
        {<GymBuddy />}
      </div>
    );
  }
}

export default App;
