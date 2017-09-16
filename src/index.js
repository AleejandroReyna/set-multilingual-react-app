import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Router from './config/router'
import Provider, {store} from './config/provider'
import {setLocalLanguage} from './actions'
import Header from './components/header'
import './index.sass'

store.subscribe(() => {console.log(store.getState())})

class App extends Component {
  componentWillMount() {
    if(!localStorage.language) {
      localStorage.language = window.navigator.language||navigator.browserLanguage;
    }
    store.dispatch(setLocalLanguage(localStorage.language));
  }
  render() {
    return(
      <Provider>
        <Router type="hash">
          <Header />
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)