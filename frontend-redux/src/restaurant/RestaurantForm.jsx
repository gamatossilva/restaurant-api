import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelAndInput from '../form/LabelAndInput'

import IconButton from '../template/IconButton'
import Grid from '../template/Grid'

class RestaurantForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <Field name='name' component={LabelAndInput} label='Nome do Restaurante' cols='12 4' placeholder='Nome do Restaurante' />
                <button type='submit' className='btn btn-primary'>
                    <i className='fa fa-plus'></i>
                </button>
            </form>
        )
    }
}

RestaurantForm = reduxForm({ form: 'RestaurantForm', destroyOnUnmount: false })(RestaurantForm)
export default RestaurantForm