import React, { useState } from 'react'
import classNames from 'classnames'
import { Avatar, Badge } from '@material-ui/core'
import { makeStyles, useTheme, withStyles } from '@material-ui/styles'

import { StatusRead } from '../StatusRead'
import { Time } from '../Time'
import './DialogItem.scss'

import './DialogItem.scss'


const getInitials = fullname => {
    const initials = fullname[0].toUpperCase()
    return initials
}


const StylesBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: theme.palette.success.light,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    }
}))(Badge)

const StylesBadgeCount = withStyles((theme) => ({
    root: {
        width: '15%',
        color: 'transparent'
    },
    badge: {
        right: 0,
        top: '50%',
        transform: 'translateY(-55%)',
        backgroundColor: theme.palette.secondary.light,
    }
}))(Badge)

const useStyles = makeStyles((theme) => ({
    time: theme => ({
        color: theme.palette.text.hint
    }),
    stausCount: theme => ({
        backgroundColor: theme.palette.error.main, 
        color: theme.palette.error.contrastText, 
    }),
    itemActive: theme => ({
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.secondary,
        
    })
}))

const DialogItem = ({user, message, isMe}) => {
    //temporarily
    const [active, setActive] = useState(false)
    const theme = useTheme()
    const classes = useStyles(theme)


    return (
        <div 
            className={classNames('dialogs__item', {[`${classes.itemActive}`]: active})}
            onClick={() => setActive(!active)}
        >
            <div className="dialogs__item-avatar">
            <StylesBadge
                overlap="circle"
                variant='dot'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right',}}
                invisible={!user.isOnline}
            >
                <Avatar 
                    src={user.avatar ? user.avatar : null} 
                    alt={user.fullname}
                    
                >
                    {getInitials(user.fullname)}
                </Avatar>
            </StylesBadge>
            </div>
            <div className="dialogs__item-info">
                <div className="info__block">
                    <p className="title">{user.fullname}</p>
                    <p className={classNames('time', classes.time)} >
                        <Time date={new Date('Sun Jan 1 2020 05:57:0 GMT+0300')}/>
                    </p>
                </div>
                <div className="info__block">
                    <p className="text">{message.text}</p>
                    {
                        isMe 
                        ? <StatusRead  classes="status-read" isReaded={false}/>
                        : <StylesBadgeCount
                            color="primary"
                            overlap="circle"
                            badgeContent={10}

                        >10</StylesBadgeCount>
                    }
   
                </div>
            </div>

        </div>
    )
}

DialogItem.propTypes = {

}

export default DialogItem