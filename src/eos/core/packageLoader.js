import { AppConfig } from '../../App.config'
import { ComponentLoader } from './componentLoader'

let Packages = {}

class _PackageLoader {
    constructor() {
        console.log("packages", Packages)
    }

    use(packages) {
        packages.forEach(name => {
            import(`../../packages/${name}`).then(module => {
                console.log('package loaded, loading components', name, module)
                const Components = module.Components;
                if (Components)
                    ComponentLoader.inject(Components);
                else
                    console.log('package', name, 'does not have components')

            });
        });
    }
}

const PackageLoader = new _PackageLoader()

PackageLoader.use(AppConfig.packages)

export { PackageLoader }