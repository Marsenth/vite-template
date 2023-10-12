import { Route } from '@tanstack/router'
import { rootRoute } from '..';
import Home from '../../pages/Home';
import About from '../../pages/About';

const mainRoutes = [
  new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/drag-and-drop',
    component: About,
  })
];

export default mainRoutes;
