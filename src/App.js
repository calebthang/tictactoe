import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name="Caleb" />
        <Counter />
      </div>
    );
  }
}

export default App;