import {  Switch } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch as RouterSwitch} from 'react-router-dom';
import './App.scss';
import { Auth } from './pages/Auth/Auth';
import { Home } from './pages/Home/Home';
import { createTheme } from './util/themeSettings';


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme(darkMode)

  useEffect(() =>  {
    const themeSystem =  window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(themeSystem)
  }, [])

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <div className="App">
        <div className='theme-switch'>
          <Switch 
            checked={darkMode} 
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
        <RouterSwitch>
          <Route
            exact 
            path={["/login", "/registration"]}
            component={Auth}
          />
          <Route
          path='/'
          component={Home}
          />
        </RouterSwitch>
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
