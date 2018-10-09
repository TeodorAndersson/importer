import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Core } from './packages/eos'

class _App extends Component {

  lazyLoad() {
    console.log('lazyLoad');
    Core.PackageLoader.use('dhl');
  }

  render() {

    const { Button, Avatar, Icon } = this.props.Components;

    if (!Button || !Avatar || !Icon) return null;

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button />
          <Avatar />
          <Icon />
          <button onClick={() => this.lazyLoad()} >Lazy load DHL package</button>
        </header>
      </div>
    );
  }
}

const ConnectedApp = Core.ComponentLoader.connect(_App);

export default ConnectedApp;
