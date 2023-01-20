import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

const history = createMemoryHistory()

export const TestRouter = ({ children }: any) => (
  <Router location={history.location} navigator={history}>
    {children}
  </Router>
)

export const TestProvider = ({ children }: any) => (
  <Provider store={store}>
    {children}
  </Provider>
)