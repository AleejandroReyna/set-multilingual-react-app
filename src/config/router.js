import React, {Component} from 'react'
import Routes from './routes'
import Layout from '../components/layout'
import {
  HashRouter,
  // if required BrowserRouter,
  Route,
  Link,
  IndexRoute,
  Switch,
} from 'react-router-dom'

class Router extends Component {
  componentWillMount() {
    console.log('router mounted')
  }
  render() {
    const {type} = this.props
    return (
      <HashRouter>
        <div>
          {this.props.children}
          <Layout>
            <Switch>
            {
              Routes.map((route, index) => {
                if(route.path) {
                  if(route.exact) {
                    return(
                      <Route exact key={index} path={route.path} component={route.component}/>
                    )
                  } else {
                    return(
                      <Route key={index} path={route.path} component={route.component}/>
                    )
                  }
                } else {
                  return(
                    <Route key={index} component={route.component}/>
                  )
                }
              })
            }
            </Switch>
          </Layout>
        </div>
      </HashRouter>     
    )
  }
}

export default Router