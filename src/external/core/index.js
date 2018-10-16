import React from 'react'

import { ComponentLoader } from './componentLoader'
import { PackageLoader } from './packageLoader'
import { Store, Provider } from './store'

const connect = (WrappedComponent) => {

    return class extends React.Component {
        state = {
            componentReloads: 0,
            Components: ComponentLoader.get()
        }

        componentWillMount() {
            ComponentLoader.subscribe(() => {
                this.setState((oldState) => {
                    return {
                        componentReloads: oldState.componentReloads + 1,
                        Components: ComponentLoader.get()

                    }
                });
            })
        }

        render() {
            return <WrappedComponent {...this.props} {...this.state} />
        }
    }
}

const Core = { ComponentLoader, PackageLoader, Store, Provider, connect }

export default Core


