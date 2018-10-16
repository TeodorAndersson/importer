import React from 'react'
import {applyMiddleware, compose} from 'redux'
import {Provider as ReduxProvider} from 'react-redux'
import {createInjectSagasStore, sagaMiddleware, injectSaga} from 'redux-sagas-injector'
import {injectReducer} from 'redux-reducers-injector'


class _Store {
    store

    constructor() {
        const composeEnhancers =
            typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
                }) : compose;

        const enhancer = composeEnhancers(
            applyMiddleware(sagaMiddleware),
            // other store enhancers if any
        );

        this.store = createInjectSagasStore(
            {
                rootSaga: function* () {
                    yield 0
                }
            },
            {
                init: () => {
                    return {}
                }
            },
            {},
            enhancer
        )

    }

    get() {
        return this.store
    }

    injectReducers(newReducers, override) {
        Object.keys(newReducers).forEach((name) => {
            injectReducer(name, newReducers[name]);
        })
    }

    injectSagas(newSagas, override) {
        Object.keys(newSagas).forEach((name) => {
            injectSaga(name, newSagas[name]);
        });
    }


}

class Provider extends React.Component {

    state = {
        store: Store.get()
    };

    render() {
        return <ReduxProvider store={this.state.store}>
            {this.props.children}
        </ReduxProvider>
    }
}

const Store = new _Store();

export {Store, Provider}



