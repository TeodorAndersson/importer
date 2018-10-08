import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Core } from './eos'

Core.ComponentLoader.use([
  'Button',
  'Avatar',
  'Icon'
]);

class _App extends Component {
  render() {
    console.log(this.props);
    //look at all this boilerplate?!

    const Button = this.props.Components.Button;
    const Avatar = this.props.Components.Avatar;
    const Icon = this.props.Components.Icon;
    if (!Button || !Avatar || !Icon) return null;


    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button />
          <Avatar />
          <Icon />
        </header>
      </div>
    );
  }
}

const ConnectedApp = Core.ComponentLoader.connect(_App);

export default ConnectedApp;
