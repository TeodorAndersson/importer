import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from 'Packages/eos'
import {PackageLoader} from "./packages/eos/core/packageLoader";
import {AppConfig} from './App.config'
PackageLoader.use(AppConfig.packages).then(() => {
    console.log('All packages loaded');
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
