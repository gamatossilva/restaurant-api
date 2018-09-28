import React from 'react'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return (
            list.map(restaurant => (
                <tr key={restaurant._id}>
                    <td>{restaurant.name}</td>
                </tr>
            ))
        )
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome do Restaurante</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}