import {ComponentLoader} from './componentLoader'
import {PackageLoader} from './packageLoader'
import {AppConfig} from 'AppConfig'

PackageLoader.use(AppConfig.packages, false).then(() => {
   console.log('All packages loaded')
});

export const Core = {ComponentLoader, PackageLoader}


