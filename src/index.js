import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link } from 'react-router-dom'
import Router from './config/router'

class App extends Component {
  render() {
    return(
      <Router type="hash">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page">Page</Link></li>
          <li>
            <Link to="/nested">Nested</Link>
            <ul>
              <li><Link to="/nested/1">Nested #01</Link></li>
              <li><Link to="/nested/2">Nested #02</Link></li>
              <li><Link to="/nested/3">Nested #03</Link></li>
            </ul>
          </li>
          <li><Link to="/route-not-defined">Route not defined</Link></li>
          <li><Link to="/route/with/path/not/defined">Route with path no defined</Link></li>
        </ul>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)