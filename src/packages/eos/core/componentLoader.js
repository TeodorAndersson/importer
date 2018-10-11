class _ComponentLoader {
    Components = {}
    connectedWrappers = [];

    inject(newComponents, override) {
        return new Promise((resolve, reject) => {
            let c = { ...this.Components }
            Object.keys(newComponents).forEach(name => {
                console.log(`${name} component wants to be injected`)
                if (!c[name] || override) {
                    c[name] = newComponents[name];
                    console.log(`${name} component was successfully injected`)
                } else {
                    console.log(`${name} component was already injected`)
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


}

const ComponentLoader = new _ComponentLoader()

export { ComponentLoader }