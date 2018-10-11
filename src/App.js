import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Core } from './packages/eos'
import 'semantic-ui-css/semantic.min.css';

class _App extends Component {

    lazyLoad() {
        console.log('lazyLoad');
        Core.PackageLoader.use('dhl');
    }

    render() {

        const { ProgressBarFeature } = this.props.Components;

        if (!ProgressBarFeature) return null;

        return (
            <Core.Provider>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div style={{ width: "500px" }}>
                            <ProgressBarFeature />
                        </div>
                    </header>
                </div>
            </Core.Provider>
        );
    }
}

const ConnectedApp = Core.connect(_App);

export default ConnectedApp;
