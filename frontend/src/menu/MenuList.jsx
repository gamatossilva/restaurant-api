import React from 'react'

export default props => {
    const renderRows = () => {
        const listMenu = props.listMenu || []
        return (
            listMenu.map(menu => (
                <tr key={menu._id}>
                    <td>{menu.name}</td>
                    <td>{menu.description}</td>
                    <td>{menu.course}</td>
                    <td>{menu.price}</td>
                </tr>
            ))
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}