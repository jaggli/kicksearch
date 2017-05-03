import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './styles/globalStyles'

import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import Home from './pages/Home'
import ResultList from './pages/ResultList'

import configureStore from './configureStore'
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/resultlist' component={ResultList} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
  , document.getElementById('root')
)
