import React, { Component } from 'react';
import './ChatHeader.scss';

class ChatHeader extends Component {
  render() {
    const { shop } = this.props;
    const logoStyle = {
      backgroundImage: `url(${shop.logo})`,
    };
    return (
      <header className="ChatHeader">
        <div className="logo" style={logoStyle} />
        <h1>{shop.name}</h1>
      </header>
    );
  }
}

export default ChatHeader;
