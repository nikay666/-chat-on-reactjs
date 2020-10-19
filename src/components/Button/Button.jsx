import React from 'react'
import propTypes from 'prop-types'
import { Button as BaseButton, makeStyles } from '@material-ui/core'
import './Button.scss'
import classNames from 'classnames'



const  useStyles = makeStyles({
    root: {
    marginTop: 16,
    marginBottom: 8,
    }
  })

  
const Button = (props) => {

    const classes = useStyles()
    return (
        <BaseButton  
            className={classNames('button', props.className, classes.root)}
            {...props}
        />
 
    
    )
}

Button.propTypes = {
    className: propTypes.string
}
export default Button;