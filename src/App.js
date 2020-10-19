import {  Card, CardContent, makeStyles, Paper, Switch } from '@material-ui/core';
import React, { useState } from 'react';
import './App.scss';
import { Button } from './components/Button/';
import Input from './components/Input/Input';
import {withTheme} from './Theme/Theme'
 
const  useStyles = makeStyles((theme) =>({
  root:  {
    width:  '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  theme.palette.background.paper,

  },
}))
const useStylesForm = makeStyles((theme) => ({
  root:  {
    width: 430,
    padding: 25,
    backgroundColor: theme.palette.background,
  },
}))




function App(props) {

  const {darkMode, setDarkMode} = props
  const classes = useStyles()
  const classesForm  = useStylesForm()

  
  return (
    <div className="App">
      <Paper className={classes.root} square={true}>
      <Switch 
        checked={darkMode} 
        onChange={() => setDarkMode(!darkMode)}
      />
        <h1>Войти в аккаунт</h1>
        <p>Пожалуйста, войдите в свой аккаунт</p>

        <Card className={classesForm.root} elevation={8}>
          <CardContent component='form' >
            <Input placeholder='user@gmail.com' label='Логин'/>
            <Input placeholder='Пароль' label='Пароль' />
            <Button 
              color='primary'
              variant="contained"
              size='large'
              fullWidth={true}
            >Войти в аккаунт</Button>
              <Button>Зарегистрироваться</Button>
            </CardContent>
        </Card>
      </Paper>
    </div>
  );
}

export default withTheme(App);
