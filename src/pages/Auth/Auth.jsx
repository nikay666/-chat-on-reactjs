import { Card, CardContent, makeStyles, Paper, Switch, Typography } from '@material-ui/core'
import React from 'react'
import { ButtonСustom } from '../../components/ButtonСustom'
import { InputСustom } from '../../components/InputСustom'
import './auth.scss'


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
  
export const Auth = () => {
    const classes = useStyles()

    return (
        <section className='auth'>
            <Paper className={classes.root} square={true}>
                <div className="auth__title">
                    <h1 className='visually-hidden'>Чат на ReactJS</h1>
                    <Typography variant='h2' color='textPrimary'>Войти в аккаунт</Typography>
                    <Typography 
                        color='textSecondary'>Пожалуйста, войдите в свой аккаунт</Typography>
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
                    <ButtonСustom variant="text" color="primary">Зарегистрироваться</ButtonСustom>
                </CardContent>
            </Card>
        </Paper>
      </section>
    )
}
