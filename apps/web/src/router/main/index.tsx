import { Route } from '@tanstack/router'
import { rootRoute } from '..';
import Home from '../../pages/Form';
import About from '../../pages/DragAndDrop';

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
