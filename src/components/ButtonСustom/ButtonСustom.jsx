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

  
const ButtonСustom = (props) => {
    const classes = useStyles()
    return (
        <BaseButton  
            className={classNames('button', props.className, classes.root)}
            {...props}
        />
 
    
    )
}

ButtonСustom.propTypes = {
    className: propTypes.string
}

export default ButtonСustom;