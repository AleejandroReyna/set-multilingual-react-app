import React from 'react'
import cssModules from 'react-css-modules'
import Style from './index.sass'

const Layout = (props) => (
  <div styleName="layout">
    {props.children}
  </div>
)

export default cssModules(Layout, Style)