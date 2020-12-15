import { Paper } from '@material-ui/core'
import React from 'react'
import {  Route } from 'react-router-dom'
import { LoginForm } from '../../modules/LoginForm/'
import { RegistrationForm } from '../../modules/RegistrationForm/'
import './auth.scss'

export const Auth = () => {

    return (
        <section className='auth'>
            <Paper className='auth__content' square={true}>
                <Route exact path='/login' component={LoginForm} />
                <Route exact path='/registration' component={RegistrationForm} />
        </Paper>
      </section>
    )
}
