import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts'
import Search from '~/layouts/components/Search';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

//Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null }

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }