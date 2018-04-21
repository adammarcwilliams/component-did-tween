import React, { Component } from 'react';
import AnimatingState from './01-Animating-State'
import PageTransitions from './02-Page-Transitions'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AnimatingState /> */}
        <PageTransitions />
      </div>
    );
  }
}

export default App;
