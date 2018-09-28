import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'

import RestaurantList from './RestaurantList'
import RestaurantForm from './RestaurantForm'

const URL = 'http://localhost:3003/restaurants'

export default class Restaurant extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            list: []
        }
        this.refresh()
    }

    refresh() {
        axios.get(URL).then(resp => this.setState({
            ...this.state,
            list: resp.data
        }))
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    handleAdd = () => {
        const name = this.state.name
        axios.post(URL, { name }).then(resp => this.refresh())
        //console.log('foi')
    }
    render() {
        return (
            <div>
                <PageHeader name='Restaurantes' small='Cadastro' />
                <RestaurantForm name={this.state.name}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <RestaurantList list={this.state.list} />
            </div>
        )
    }
}