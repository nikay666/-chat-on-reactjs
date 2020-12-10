import {  createMuiTheme, Switch, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import './App.scss';
import { Auth } from './pages/Auth/Auth';
import { Registration } from './pages/Auth/Registration';

 

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  })

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <div className='theme-switch'>
        <Switch 
          checked={darkMode} 
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>
      {/* <Auth palette={theme.palette}/> */}
      <Registration/>
    </div>
    </ThemeProvider>
  );
}

export default App;
