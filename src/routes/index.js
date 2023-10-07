import DetailPage from '../pages/Detail';
import HomePage from '../pages/Home';
import LivePage from '../pages/Live';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/live', component: LivePage },
    { path: '/:id', component: DetailPage },
];

export { publicRoutes };
