import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { useTheme } from '@material-ui/core'
import classNames from 'classnames'

import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneIcon from '@material-ui/icons/Done';


const useStyles = makeStyles({
    done: theme => ({
       color: theme.palette.secondary.light,
       fontSize: '14px'
    }),
    doneContrast: theme => ({
        color: theme.palette.secondary.contrastText,
        fontSize: '14px'
     }),
})
const StatusRead = ({isReaded=false, classes='', isContrast=false }) => {
    const  theme = useTheme()
    const classesStyle = useStyles(theme)

    return (
      isReaded 
     ? <DoneAllIcon  className={classNames(classes, classesStyle.done, {[`${classesStyle.doneContrast}`]: isContrast})} /> 
     :  <DoneIcon className={classNames(classes, classesStyle.done, {[`${classesStyle.doneContrast}`]: isContrast})}/>
    )
}

StatusRead.propTypes = {
    isReaded: PropTypes.bool,
    classes: PropTypes.string
}


export default StatusRead
