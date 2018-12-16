import React, { Component } from 'react';
import { Line } from './lib';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Line text='ANIMATED' font='Ink Free' staggerDuration={300}/>
            <br/>
            <Line text='LETTERS' font='Ink Free' staggerDuration={300} delay={300 * 5}/>
        </header>
      </div>
    );
  }
}

// TODO: Handle kerning

export default App;
