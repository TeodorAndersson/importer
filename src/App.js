import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Core} from './packages/eos'
import 'semantic-ui-css/semantic.min.css';

class _App extends Component {

    lazyLoad() {
        console.log('lazyLoad');
        Core.PackageLoader.use('dhl');
    }

    render() {

        const {ProgressBarFeature} = this.props.Components;

        if (!ProgressBarFeature) return null;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div style={{width: "500px"}}>
                        <ProgressBarFeature/>
                    </div>
                </header>
            </div>
        );
    }
}

const ConnectedApp = Core.ComponentLoader.connect(_App);

export default ConnectedApp;
