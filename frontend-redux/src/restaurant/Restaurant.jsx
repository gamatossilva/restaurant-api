import React, { Component } from 'react'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PageHeader from '../template/PageHeader'

import RestaurantList from './RestaurantList'
import RestaurantForm from './RestaurantForm'
import RestaurantMenuForm from './RestaurantMenuForm'

import { init, create, update } from './RestaurantActions'

const URL = 'http://localhost:3003/restaurants'

class Restaurant extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: '',
    //         list: []
    //     }
    //     this.refresh()
    // }

    // refresh() {
    //     axios.get(URL).then(resp => this.setState({
    //         ...this.state,
    //         list: resp.data
    //     }))
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         ...this.state,
    //         name: e.target.value
    //     })
    // }

    // handleAdd = () => {
    //     const name = this.state.name
    //     axios.post(URL, { name }).then(resp => this.refresh())
    //     //console.log('foi')
    // }

    componentWillMount() {
        this.props.init()
    }
    render() {
        return (
            <div>
                <PageHeader name='Restaurantes' small='Cadastro' />
                <RestaurantForm onSubmit={this.props.create} />
                <RestaurantList />
                <RestaurantMenuForm onSubmit={this.props.update} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update }, dispatch)
export default connect(null, mapDispatchToProps)(Restaurant)