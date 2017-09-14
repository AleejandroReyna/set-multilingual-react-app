import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import rootReducer from '../reducers'

export const store = createStore(rootReducer)
window.store = store

const AppProvider = (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
)

export default AppProvider

