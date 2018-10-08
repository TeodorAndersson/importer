import { AppConfig } from '../../App.config'
import { ComponentLoader } from './componentLoader'

let Packages = {}

class _PackageLoader {
    constructor() {
        console.log("packages", Packages)
    }

    use(packages, override = true) {
        const load = (packages) => {
            let name, rest;
            if (Array.isArray(packages)) {
                name = packages[0];
                rest = packages.splice(1);
            }
            else {
                name = packages;
                rest = null;
            }
            if (!name)
                return;
            console.log('loading', name, 'rest', rest);

            import(`../../packages/${name}`).then(module => {
                console.log('package loaded, loading components', name, module)
                const Components = module.Components;
                if (Components)
                    ComponentLoader.inject(Components, override);
                else
                    console.log('package', name, 'does not have components')
                load(rest);
            });
        };

        load(packages);
    }
}

const PackageLoader = new _PackageLoader()

PackageLoader.use(AppConfig.packages, false)

export { PackageLoader }