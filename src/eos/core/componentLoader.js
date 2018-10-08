import * as React from 'react'

let _Components = {}

class _ComponentLoader {
    connectedWrappers = [];
    inject(newComponents) {
        let c = { ..._Components }

        Object.keys(newComponents).map(name => {
            console.log('inject compnent', name)
            if (!c[name]) {
                console.log('injecting ', name)
                c[name] = newComponents[name];
            }
        });
        _Components = c;
        this.connectedWrappers.forEach(cb => cb());
    }
    subscribe(cb) {
        this.connectedWrappers = [...this.connectedWrappers, cb]
    }

    async use(componentNames) {
        return Promise.all(componentNames.map(name => {
            // see if the name is a explicit or default component
            return new Promise((resolve, reject) => {
                const comp = _Components[name];
                if (!comp)
                    reject("Component not found!");
                resolve(comp)
            })
        }));

    }

    connect(WrappedComponent) {
        return class extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    components: 0
                }
            }
            componentWillMount() {
                ComponentLoader.subscribe(() => {
                    this.setState(() => {
                        return { components: this.state.components + 1 }
                    });
                })
            }
            render() {
                return <WrappedComponent {...this.props} Components={_Components} />
            }
        }
    }
}
const ComponentLoader = new _ComponentLoader()

export { ComponentLoader }