import { Avatar, GridList, GridListTile, makeStyles, ThemeProvider, useTheme } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneIcon from '@material-ui/icons/Done';
import AddIcon from '@material-ui/icons/Add';

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
    }),
    done: theme => ({
       color: theme.palette.primary.light,
       fontSize: '14px'
    }),
    tile: theme =>  ({
        '.MuiGridListTile-tile': {
            borderRadius: '5px',
        }

    })

})



const Message = ({avatar, user = {}, text, date, isMe, isReaded, attachments}) => {
    const  theme  = useTheme()
    const classes = useStyles(theme)
    
    console.log(theme.spacing)

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

                {
                attachments && 
                <div className="message__attachments" >
                    {
                        attachments.map((file, index) =>  (
                        <div key={`${file.name}-${index}`}   
                            className={classNames("message__attachments-item", 
                                {'message__attachments-item--few': attachments.length > 1}
                            )}
                        >
                            <img 
                            src={file.url} 
                            title={file.name}
                            />
                        </div>
                
                        ))
                    }
                </div>
            }
              </div>
              <span className={classNames("message__date", classes.date)}>{formatDistanceToNow(date, {addSuffix: true, locale: ru })}</span>
          </div>
          {
              isReaded 
              ? <DoneAllIcon  className={classNames('message__done', classes.done)} /> 
              :  <DoneIcon className={classNames('message__done', classes.done)}/>
          }
    
        </div>
    )
}


Message.propTypes = {
    avatar: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    isMe: PropTypes.bool.isRequired,
    isReaded: PropTypes.bool.isRequired,
    attachments:  PropTypes.array

}

export default Message;