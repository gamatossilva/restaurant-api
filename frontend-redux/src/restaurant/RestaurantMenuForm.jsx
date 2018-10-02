import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './RestaurantActions'
import ItemList from './ItemList';

class RestaurantMenuForm extends Component {

    render() {
        const { handleSubmit, menuList } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div>
                    <ItemList cols='12 12' list={menuList} field='menu' legend='Menu' />
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Salvar</button>
                </div>
            </form>
        )
    }
}

RestaurantMenuForm = reduxForm({ form: 'RestaurantMenuForm', destroyOnUnmount: false })(RestaurantMenuForm)
const selector = formValueSelector('RestaurantMenuForm')
const mapStateToProps = state => ({
    menuList: selector(state, 'menu')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMenuForm)