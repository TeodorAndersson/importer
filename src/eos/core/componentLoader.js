import * as React from 'react'

class _ComponentLoader {
    Components = {}
    connectedWrappers = [];
    inject(newComponents, override) {
        let c = { ...this.Components }

        Object.keys(newComponents).map(name => {
            console.log('inject compnent', name)
            if (!c[name] || override) {
                console.log('injecting ', name)
                c[name] = newComponents[name];
            }
        });
        this.Components = c;
        this.connectedWrappers.forEach(cb => cb());
    }
    subscribe(cb) {
        this.connectedWrappers = [...this.connectedWrappers, cb]
    }

    get() {

        return this.Components;
    }

    connect(WrappedComponent) {

        return class extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    componentreloads: 0,
                    Components: () => { }

                }
            }
            componentWillMount() {
                ComponentLoader.subscribe(() => {
                    this.setState(() => {
                        return {
                            componentreloads: this.state.componentreloads + 1,
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

export { ComponentLoader }