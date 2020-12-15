import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { ButtonСustom } from '../../components/ButtonСustom'
import { InputСustom } from '../../components/InputСustom'


const LoginForm = () => {
    return (
        <>
            <div className="auth__title">
                    <h1 className='visually-hidden'>Чат на ReactJS</h1>
                    <Typography variant='h2' color='textPrimary'>Войти в аккаунт</Typography>
                    <Typography 
                        color='textSecondary'
                    >Пожалуйста, войдите в свой аккаунт</Typography>
            </div>
            <Card className='auth__form auth__form-login' elevation={8}>
                <CardContent component='form' >
                <InputСustom  
                    required
                    type='email'
                    placeholder='user@gmail.com' 
                    label='Логин'
                />
                <InputСustom  
                    required
                    type='password'
                    placeholder='Пароль' 
                    label='Пароль' 
                />
                <ButtonСustom 
                    type='submit'
                    color='primary'
                    variant="contained"
                    size='large'
                    fullWidth={true}
                >Войти в аккаунт</ButtonСustom>
                    <ButtonСustom 
                        variant="text" 
                        color="primary"
                        component={Link}
                        to='registration'
                    >Зарегистрироваться</ButtonСustom>
                </CardContent>
            </Card>
        </>
    )
}

export default LoginForm