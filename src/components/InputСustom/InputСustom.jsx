import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { isInputValid } from '../../util/inputValidation';


const InputСustom = ({...props}) => {
    const [valid, setValid] = useState(true)

    const handlerChange = (e) => {
        const required = e.target.required
        const type  = e.target.type
        const value = e.target.value

        if(isInputValid(type, value)){
            required && value.length !== 0 
            ? setValid(true) 
            : setValid(true)
        }else{
            setValid(false)
        }
    }

    return (
       <TextField
        error={!valid}
        onChange={handlerChange}

        variant="outlined"
        fullWidth={true}
        margin='normal'


        {...props}
       />
    )
}

export default InputСustom
