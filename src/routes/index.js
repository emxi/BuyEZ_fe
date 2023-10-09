import DetailPage from '../pages/Detail';
import HomePage from '../pages/Home';
import LivePage from '../pages/Live';
import LiveDetailPage from '../pages/LiveDetail';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/live', component: LivePage },
    { path: '/live/:id', component: LiveDetailPage },
    { path: '/:id', component: DetailPage },
];

export { publicRoutes };
