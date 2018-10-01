import React from 'react'

import Grid from '../template/Grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder} />
        </div>
    </Grid>
)