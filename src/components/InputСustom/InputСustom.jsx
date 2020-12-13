import {  TextField } from '@material-ui/core'
import {  makeStyles, ThemeProvider, useTheme } from '@material-ui/styles'
import React, { useState } from 'react'
import { isInputValid } from '../../util/inputValidation';

const useStyles = makeStyles({
    success: theme => ({
        '& input:valid + fieldset': {
            borderColor: theme.palette.success.main,
            borderWidth: 2,
           
        }
    })
})
const InputСustom = ({...props}) => {
    const [valid, setValid] = useState(true)
    const theme = useTheme()
    const classes = useStyles(theme)


    const handlerChange = (e) => {
        const required = e.target.required
        const type  = e.target.type
        const value = e.target.value

        if(isInputValid(type, value)){
            required && value.length !== 0 
            ? setValid(true) 
            : setValid(false)
        }else{
            setValid(false)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <TextField
                error={!valid}
                onChange={handlerChange}
                variant="outlined"
                fullWidth={true}
                margin='normal'

                className={classes.success}
                {...props}
            />
       </ThemeProvider>
    )
}

export default InputСustom
