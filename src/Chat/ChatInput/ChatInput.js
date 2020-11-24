import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  sendMessage = () => {
    this.props.chatMessage(this.state.inputText);
    this.setState({
      inputText: '',
    });
  };

  handleOnChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.inputText} onChange={this.handleOnChange} />
        <button type="button" onClick={this.sendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
