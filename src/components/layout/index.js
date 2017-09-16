import React from 'react'
import './index.sass'

const Layout = (props) => (
  <div className="layout">
    {props.children}
  </div>
)

export default Layout