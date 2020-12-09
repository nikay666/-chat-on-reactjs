import { TextField } from '@material-ui/core'
import React from 'react'


const InputСustom = ({...props}) => {

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

export default InputСustom
