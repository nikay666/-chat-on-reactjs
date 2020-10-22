import {  Card, CardContent, createMuiTheme, makeStyles, Paper, Switch, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import './App.scss';
import { Button } from './components/Button/';
import Input from './components/Input/Input';

 
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

const useStylesForm = makeStyles({
  root:  {
    width: 430,
    padding: 25,
  },
})


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const classes = useStyles()
  const classesForm  = useStylesForm()

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  })
  console.log(classes.root)


  return (
    <ThemeProvider theme={theme}>
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
            <Input  placeholder='Пароль' label='Пароль' />
            <Button 
              color='primary'
              variant="contained"
              size='large'
              fullWidth={true}
            >Войти в аккаунт</Button>
              <Button >Зарегистрироваться</Button>
            </CardContent>
        </Card>
      </Paper>
    </div>
    </ThemeProvider>
  );
}

export default App;
