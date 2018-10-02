import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelInput from '../common/form/LabelAndInput'

import { init } from './RestaurantActions'

import ItemList from './ItemList'

class RestaurantForm extends Component {
    render() {
        const { handleSubmit, readOnly, menu } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelInput} readOnly={readOnly}
                        label='Nome' cols='12 12' placeholder='Informe o nome' />
                    <ItemList cols='12 12' list={menu} readOnly={readOnly}
                        field='menu' legend='Menu' />

                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

RestaurantForm = reduxForm({ form: 'RestaurantForm', destroyOnUnmount: false })(RestaurantForm)
const selector = formValueSelector('RestaurantForm')
const mapStatetoProps = state => ({
    menu: selector(state, 'menu')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStatetoProps, mapDispatchToProps)(RestaurantForm)