import * as React from 'react'

class _ComponentLoader {
    Components = {}
    connectedWrappers = [];

    inject(newComponents, override) {
        return new Promise((resolve, reject) => {
            let c = {...this.Components}
            Object.keys(newComponents).forEach(name => {
                console.log(`${name} component wants to be injected`)
                if (!c[name] || override) {
                    c[name] = newComponents[name];
                    console.log(`${name} component was successfully injected`)
                }
            });
            this.Components = c;
            this.connectedWrappers.forEach(cb => cb());
            resolve()
        })
    }

    subscribe(cb) {
        this.connectedWrappers = [...this.connectedWrappers, cb]
    }

    get() {
        return this.Components;
    }

    connect(WrappedComponent) {

        return class extends React.Component {
            state = {
                componentReloads: 0,
                Components: () => {
                }
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
}

const ComponentLoader = new _ComponentLoader()

export {ComponentLoader}