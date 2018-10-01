import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'

import MenuList from './MenuList'

const URL = 'http://localhost:3003/restaurants'

export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuList: []
        }

        this.refresh()
    }

    refresh() {
        axios.get(`${URL}/${this.props.restaurant._id}`)
            .then(resp => this.setState({
                ...this.state,
                menuList: resp.data
            }))
    }

    render() {
        return (
            <div>
                <PageHeader name='Menu do Restaurante' small='Cadastro' />
                <MenuList listMenu={this.state.menuList} />
            </div>
        )
    }
}