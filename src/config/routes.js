import React from 'react'

import Home from '../pages/home'
import Page from '../pages/page'
import Nested from '../pages/nested'
import NestedItem from '../pages/nested-item'
import NoMatch from '../pages/no-match'

const Routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/page",
    component: Page
  },
  {
    path: '/nested',
    component: Nested,
    exact: true
  },
  {
    path: '/nested/:id',
    component: NestedItem
  },
  {
    component: NoMatch
  }
]

export default Routes