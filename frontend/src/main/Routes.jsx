import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import About from '../about/About'

import Restaurant from '../restaurant/Restaurant'

export default props => (
    <Switch>
        <Route path='/restaurants' component={Restaurant} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/restaurants' />
    </Switch>
)