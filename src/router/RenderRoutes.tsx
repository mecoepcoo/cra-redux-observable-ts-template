import React from 'react'
import { Switch } from 'react-router-dom'
import NoMatch from '@/pages/status/404'
import { RouteInterface } from '@/types/route'
import { RouteWithSubRoutes } from './RouteWithSubRoutes'

export const RenderRoutes = (routes: RouteInterface[], authed: boolean, authPath = '/login') => {
  if (routes) {
    return (
      <Switch>
        {routes.map((route: RouteInterface, i) => {
          return RouteWithSubRoutes(route, i, authed, authPath)
        })}
      </Switch>
    )
  } else {
    return NoMatch
  }
}
