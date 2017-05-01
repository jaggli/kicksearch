import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import reducers from './reducers'

import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import Home from './pages/Home'

const store = createStore(reducers, applyMiddleware(promiseMiddleware()))

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          {/*<Route exact path='/otherpage' component={} />*/}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
  , document.getElementById('root')
)
