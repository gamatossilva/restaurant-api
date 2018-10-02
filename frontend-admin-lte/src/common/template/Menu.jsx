import React from 'react'

import MenuItem from './MenuItem'
import MenuTree from './MenuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/about' label='Sobre' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='restaurants' label='Lista de Restaurantes' icon='usd' />
        </MenuTree>
    </ul>
)