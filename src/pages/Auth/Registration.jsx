import { Card, CardContent, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'

import { ButtonСustom } from '../../components/ButtonСustom'
import { InputСustom } from '../../components/InputСustom'

import './auth.scss'

import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom'

const  useStyles = makeStyles({
    root:  {
      width:  '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })


export const Registration = () => {
    const classes = useStyles()
    const [confirm, setConfirm] = useState(false)

    return (
        <section className='auth'>
            <Paper className={classes.root} square={true}>
                <div className="auth__title">
                    <h1 className='visually-hidden'>Чат на ReactJS</h1>
                    <Typography variant='h2' color='textPrimary'>Регистрация</Typography>
                    <Typography 
                        color='textSecondary'>Для входа в чат, вам нужно зарегистрироваться</Typography>
                </div>

            <Card className='auth__form  auth__form-registration' elevation={8}>

                    <CardContent component='form' >
                        {
                            confirm ?  
                            
                            <>
                                <InfoIcon className='icon-auth' color="primary"  fontSize="large" />
                                <Typography variant='h3' color='textPrimary'>Подтвердите свой аккаунт</Typography>
                                <Typography  color='textSecondary'>На Вашу почту отправлено письмо с ссылкой на подтверждениие аккаунта.</Typography>
                            </> 
                            :
                            <>
                                <InputСustom 
                                    required
                                    type='email'
                                    reg={`\/d\$`}
                                    placeholder='E-mail' 
                                    label='Email'                                
                                    />
                                <InputСustom  
                                    required
                                    type='text'
                                    placeholder='Ваше имя' 
                                    label='Ваше имя' 
                                />
                                <InputСustom  
                                    required
                                    type='password'
                                    placeholder='Пароль' 
                                    label='Пароль' 
                                />
                                <InputСustom  
                                    required
                                    type='password'
                                    placeholder='Повторить пароль' 
                                    label='Повторить пароль' 
                                />
                                <ButtonСustom 
                                    type='submit'
                                    color='primary'
                                    variant="contained"
                                    size='large'
                                    fullWidth={true}
                                >Зарегистрироваться</ButtonСustom>
                        
                            </>
                            
                        }
                        <ButtonСustom 
                            variant="text" 
                            color="primary" 
                            component={Link} 
                            to='/login'
                            onClick={()  =>  setConfirm(!confirm)} 
                        >
                        Войти в аккаунт</ButtonСustom>
                    </CardContent>

            </Card>
        </Paper>
      </section>
    )
}
