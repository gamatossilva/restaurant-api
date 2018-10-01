import React from 'react'
import Menu from '../menu/Menu';

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return (
            list.map(restaurant => (
                <tr key={restaurant._id}>
                    <td>{restaurant.name}</td>
                    <td>
                        <button className='btn btn-warning'>
                            <i className='fa fa-pencil'></i>
                        </button>
                    </td>
                </tr>
            ))
        )
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome do Restaurante</th>
                    <th style={{ width: '150px' }}>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}