import {  Switch } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import './App.scss';
import { Auth } from './pages/Auth/Auth';
import { Registration } from './pages/Auth/Registration';
import { createTheme } from './util/themeSettings';


function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  const theme = createTheme(darkMode)
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
      <Registration theme={theme} />
    </div>
    </ThemeProvider>
  );
}

export default App;
