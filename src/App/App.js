import React, { Component } from 'react';
import './App.scss';
import Chat from '../Chat/Chat';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Chat />
      </div>
    );
  }
}

export default App;
