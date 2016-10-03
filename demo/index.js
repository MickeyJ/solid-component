import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import './demo.scss'

import Layout from './Layout'
import Main from './Pages/Main'
import Buttons from './Pages/Buttons'
import Forms from './Pages/Forms'
import Grid from './Pages/Grid'

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}/>
      <Route path="buttons" component={Buttons}/>
      <Route path="forms" component={Forms}/>
      <Route path="grid" component={Grid}/>
    </Route>
  </Router>,
  document.getElementById('root')
);