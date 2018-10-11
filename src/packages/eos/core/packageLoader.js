import {ComponentLoader} from './componentLoader'

class _PackageLoader {

    async load(name, override) {
        await import(`Packages/${name}`).then(async module => {
            console.log(`Package ${name} loaded, now loading components`)
            if (module.Components && module.Components.__esModule) {
                console.log(`Components from ${name} package will now be injected`)
                await ComponentLoader.inject(module.Components, override).then(()=>(
                    import(`Packages/${name}/styles`)
                ))
            } else {
                console.log(`It was not possible to find any component inside ${name} package`)
            }
        })
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

export {PackageLoader}