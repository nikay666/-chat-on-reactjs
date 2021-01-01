import { Avatar, makeStyles,  useTheme } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneIcon from '@material-ui/icons/Done';

import './Message.scss'
import { ru } from 'date-fns/esm/locale'


const useStyles = makeStyles({
    bubble: theme => ({
        backgroundColor:  theme.palette.background.paper,
        color: theme.palette.text.primary,
        border: theme.palette.type === 'dark' 
            ? `1px solid ${theme.palette.grey[800]}` 
            : `1px solid ${theme.palette.grey[200]}`
    }),
    bubbleMe: theme => ({
        backgroundColor:  theme.palette.secondary.light,
        color: theme.palette.primary.contrastText,
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

    }),
    typing: theme => ({ 
        backgroundColor: theme.palette.grey[700]
    }),
    typingMe: theme => ({ 
        backgroundColor: theme.palette.grey[100]
    }),

})



const Message = ({avatar, user = {}, text, date, isMe, isReaded, attachments, isTyping}) => {
    const  theme  = useTheme()
    const classes = useStyles(theme)
    
    console.log(theme.palette)

    return (
        <div className={classNames('message', 
            {'message--isme': isMe}, 
            {'message--is-typing': isTyping})}
        >
            <Avatar 
                className='message__avatar'  
                src={avatar}
                title={user.name}
            />
          <div className="message__content">
            <div 
                className={classNames('message__bubble', 
                    classes.bubble, 
                    {[`${classes.bubbleMe}`]: isMe},
                    {'message__bubble--attachments': attachments},
                    {'message__bubble--without': (!text && !isTyping)}
                )} 
                >
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
                            alt={file.name}
                            />
                        </div>
                
                        ))
                    }
                </div>
            }
                <p className="message__text">{text}</p>
                {
                    isTyping && <div className="message__typing">
                        <div className={classNames("dot", classes.typing, {[`${classes.typingMe}`]: isMe })}></div>
                        <div className={classNames("dot", classes.typing, {[`${classes.typingMe}`]: isMe })}></div>
                        <div className={classNames("dot", classes.typing, {[`${classes.typingMe}`]: isMe })}></div>
                    </div>
                }

              </div>
             {
                date  && <span className={classNames("message__date", classes.date)}>
                 {formatDistanceToNow(date, {addSuffix: true, locale: ru })}
               </span>
             } 
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
    attachments:  PropTypes.array,
    isTyping: PropTypes.bool

}

export default Message;