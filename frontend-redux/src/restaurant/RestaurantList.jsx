import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate } from './RestaurantActions'

class RestaurantList extends Component {
    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(restaurant => (
            <tr key={restaurant._id}>
                <td>{restaurant.name}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(restaurant)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome do Restaurante</th>
                            <th style={{}}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.restaurant.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)