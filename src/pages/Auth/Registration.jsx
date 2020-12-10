import { Card, CardContent, makeStyles, Paper, Switch, Typography } from '@material-ui/core'
import React from 'react'
import ButtonСustom from '../../components/ButtonСustom/ButtonСustom'
import InputСustom from '../../components/Input/InputСustom'
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
  
export const Registration = () => {
    const classes = useStyles()

    return (
        <section className='auth'>
            <Paper className={classes.root} square={true}>
                <div className="auth__title">
                    <h1 className='visually-hidden'>Чат на ReactJS</h1>
                    <Typography variant='h2' color='textPrimary'>Регистрация</Typography>
                    <Typography 
                        color='textSecondary'>Для входа в чат, вам нужно зарегистрироваться</Typography>
                </div>

            <Card className='auth__form' elevation={8}>
                <CardContent component='form' >
                <InputСustom placeholder='E-mail' label='Email'/>
                <InputСustom  placeholder='Ваше имя' label='Ваше имя' />
                <InputСustom  placeholder='Пароль' label='Пароль' />
                <InputСustom  placeholder='Повторить пароль' label='Повторить пароль' />
                <ButtonСustom 
                    color='primary'
                    variant="contained"
                    size='large'
                    fullWidth={true}
                >Зарегистрироваться</ButtonСustom>
                    <ButtonСustom variant="text" color="primary">Войти в аккаунт</ButtonСustom>
                </CardContent>
            </Card>
        </Paper>
      </section>
    )
}
