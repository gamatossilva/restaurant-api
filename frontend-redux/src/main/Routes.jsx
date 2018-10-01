import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import About from '../about/About'

import Restaurant from '../restaurant/Restaurant'

export default props => (
    <div>
        <Switch>
            <Route exact path='/' component={Restaurant} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)