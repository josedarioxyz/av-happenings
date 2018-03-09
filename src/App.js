import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RouterScrollReset from './containers/RouterScrollReset'
import Banner from './components/Banner'
import HomePage from './containers/HomePage'
import LogInPage from './components/LogInPage'
import SignUpPage from './components/SignUpPage'
import SubmitPage from './components/SubmitPage'
import HelpPage from './components/HelpPage'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <RouterScrollReset>
          <div id='app'>
            <Banner />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/login' component={LogInPage} />
              <Route path='/signup' component={SignUpPage} />
              <Route path='/submit' component={SubmitPage} />
              <Route path='/help' component={HelpPage} />
              <Route path='/about' component={AboutPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </RouterScrollReset>
      </BrowserRouter>
    )
  }
}
