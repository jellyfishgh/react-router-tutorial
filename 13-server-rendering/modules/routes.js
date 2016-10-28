import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'
import App from './App'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'
import My404Component from './My404Component'

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/repos' component={Repos}>
            <Route path='/repos/:userName/:repoName' component={Repo} />
        </Route>
        <Route path='/about' component={About} />
        <Route path='/404' component={My404Component} />
        <Redirect from='*' to='/404' />
    </Route>
)