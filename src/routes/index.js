import DetailPage from '../pages/Detail';
import HomePage from '../pages/Home';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/:id', component: DetailPage },
];

export { publicRoutes };
