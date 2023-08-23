import routeConfig from '~/config/routes';

//Layout
import { HeaderOnly } from '~/components/Layout'
import Search from '~/components/Layout/components/Search';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

//Public routes
const publicRoutes = [
    { path: routeConfig.home, component: Home },
    { path: routeConfig.following, component: Following },
    { path: routeConfig.profile, component: Profile },
    { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routeConfig.search, component: Search, layout: null }

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }