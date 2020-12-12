import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import React, { useState } from 'react'

const theme = createMuiTheme({
    palette: {
        type: 'light',
    }
})
const themeDark = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#a6d4fa',
            main: '#90caf9',
            dark: '#648dae'
        }
    }
})


const Theme = (props) => {
    const { darkMode ,children}  = props
    const  defaultTheme = darkMode ? themeDark : theme
    console.log(defaultTheme.palette)
    return (
     
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    )
}

export const withTheme = (Component) => {
    return  (props) => {
        const [darkMode, setDarkMode] = useState(false)
        return (
            <Theme darkMode={darkMode}>
                <Component  {...props} darkMode={darkMode} setDarkMode={setDarkMode}/>
            </Theme>
        )
    }
}
