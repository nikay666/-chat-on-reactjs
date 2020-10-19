import { TextField } from '@material-ui/core'
import React from 'react'

const Input = ({...props}) => {
    return (
       <TextField
        id="outlined-basic" 
        variant="outlined"
        fullWidth={true}
        margin='normal'
        
        {...props}
       />
    )
}

export default Input
