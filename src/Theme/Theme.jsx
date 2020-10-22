import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import React, { useState } from 'react'

const theme = createMuiTheme({
    palette: {
        type: 'light',
    }
})
const themeDark = createMuiTheme({
    palette: {
        type: 'dark',
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
