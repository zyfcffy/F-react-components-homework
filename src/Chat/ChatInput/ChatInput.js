import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  render() {
    return (
      <footer className="ChatInput">
        <input type="text" />
        <button type="button">Send</button>
      </footer>
    );
  }
}

export default ChatInput;
