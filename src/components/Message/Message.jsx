import { Avatar, makeStyles, ThemeProvider, useTheme } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import './Message.scss'
import { ru } from 'date-fns/esm/locale'


const useStyles = makeStyles({
    bubble: theme => ({
        backgroundColor:  theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
    }),
    bubbleMe: theme => ({
        backgroundColor:  theme.palette.background.paper,
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.grey[300]}` 
    }),
    date: theme => ({
        color: theme.palette.text.hint
    })

})



const Message = ({avatar, user = {}, text, date, isMe}) => {
    const  theme  = useTheme()
    const classes = useStyles(theme)
    
    return (
        <div className={classNames('message', {'message--isme': isMe})}>
            <Avatar 
                className='message__avatar'  
                src={avatar}
                title={user.name}
            />
          <div className="message__content">
              <div 
                className={classNames('message__bubble', classes.bubble, {[`${classes.bubbleMe}`]: isMe })} 
                >
                <p className="message__text">{text}</p>
              </div>
              <span className={classNames("message__date", classes.date)}>{formatDistanceToNow(date, {addSuffix: true, locale: ru })}</span>
          </div>
        </div>
    )
}


Message.propTypes = {
    avatar: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    isMe: PropTypes.bool.isRequired

}

export default Message;