import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Thunk from 'redux-thunk'

import rootReducer from '../reducers'

export const store = createStore(rootReducer, applyMiddleware(Thunk))
window.store = store

const AppProvider = (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
)

export default AppProvider

