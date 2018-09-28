import React from 'react'

import IconButton from '../template/IconButton'
import Grid from '../template/Grid'

export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            props.handleAdd()
        }
    }

    return (
        <div role='form' style={{ paddingBottom: '60px' }}>
            <Grid cols='12 8 11'>
                <input id='name' className='form-control'
                    placeholder='Nome do Restaurante'
                    value={props.name}
                    onKeyUp={keyHandler}
                    onChange={props.handleChange} />
            </Grid>
            <Grid cols='12 3 1'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
            </Grid>
        </div>
    )
}