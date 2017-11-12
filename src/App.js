import React, { Component } from 'react';
import './App.css';

import GymBuddies from './components/GymBuddies';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Spot me please!</h1>
        <div className="header-bar" />
        <app-gymBuddies />
        <GymBuddies />
      </div>
    );
  }
}

export default App;
