import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import { HashRouter } from 'react-router-dom'

import Menu from '../template/Menu'
import Routes from './Routes'

export default props => (
    <HashRouter>
        <div className='container'>
            <Menu />
            <Routes />
        </div>
    </HashRouter>
)