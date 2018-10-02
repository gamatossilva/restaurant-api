import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import Grid from '../common/layout/Grid'
import Input from '../common/form/Input'

import If from '../common/operator/If'

class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('RestaurantForm', this.props.field, index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('RestaurantForm', this.props.field, index)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].name`} component={Input}
                    placeholder='Informe o nome' readOnly={this.props.readOnly} /></td>
                <td><Field name={`${this.props.field}[${index}].course`} component={Input}
                    placeholder='Inform o tipo' readOnly={this.props.readOnly} /></td>
                <td><Field name={`${this.props.field}[${index}].description`} component={Input}
                    placeholder='Informe a descrição' readOnly={this.props.readOnly} /></td>
                <td><Field name={`${this.props.field}[${index}].price`} component={Input}
                    placeholder='Informe o preço' readOnly={this.props.readOnly} /></td>
                <td>
                    <button type='button' className='btn btn-success'
                        onClick={() => this.add(index + 1)}>
                        <i className='fa fa-plus'></i>
                    </button>

                    <button type='button' className='btn btn-warning'
                        onClick={() => this.add(index + 1, item)}>
                        <i className='fa fa-clone'></i>
                    </button>

                    <button type='button' className='btn btn-danger'
                        onClick={() => this.remove(index)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Tipo</td>
                                <td>Descrição</td>
                                <td>Preço</td>
                                <td className='table-actions'>Ações</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)