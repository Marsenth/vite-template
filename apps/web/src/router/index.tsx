import { Router, RootRoute } from '@tanstack/router'
import mainRoutes from './main'
import App from '../pages/_App'

// Create a root route
export const rootRoute = new RootRoute({
  component: App,
})

// Create the route tree using your routes
const routeTree = rootRoute.addChildren(mainRoutes)

// Create the router using your route tree
const router = new Router({ routeTree })

// Register your router for maximum type safety
declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}

export default router;