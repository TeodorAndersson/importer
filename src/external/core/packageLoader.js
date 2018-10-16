import { ComponentLoader } from './componentLoader'
import { Store } from './store'
class _PackageLoader {
    packages = [];
    async load(name, override) {
        if (this.packages.indexOf(name) !== -1) return;
        await import(`${name}`).then(async module => {
            this.packages = [...this.packages, name]
            console.log(`Package ${name} loaded, now loading components`)
            import(`packages/${name}/styles`)
            await this.injectComponents(module, name, override);
            await this.injectReducers(module, name, override);
            await this.injectSagas(module, name, override);
        })
    }

    async injectReducers(module, name, override) {
        if (module.Reducers) {
            console.log(`Reducers from ${name} package will now be injected`);
            await Store.injectReducers(module.Reducers, override);
        }
        else {
            console.log(`It was not possible to find any reducers inside ${name} package`);
        }
    }

    async injectComponents(module, name, override) {
        if (module.Components) {
            console.log(`Components from ${name} package will now be injected`);
            await ComponentLoader.inject(module.Components, override);
        }
        else {
            console.log(`It was not possible to find any component inside ${name} package`);
        }
    }
    async injectSagas(module, name, override) {
        if (module.Sagas) {
            console.log(`Components from ${name} package will now be injected`);
            await Store.injectSagas(module.Sagas, override);
        }
        else {
            console.log(`It was not possible to find any component inside ${name} package`);
        }
    }

    async use(packages, override = true) {
        if (Array.isArray(packages) === false) {
            packages = [packages]
        }

        for (const name of packages) {
            console.log(`Loading ${name} package.`);
            await this.load(name, override);
        }

    }
}

const PackageLoader = new _PackageLoader()

export { PackageLoader }