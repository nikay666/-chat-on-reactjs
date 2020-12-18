import { Paper } from '@material-ui/core'
import React from 'react'
import './Home.scss'


export const Home = () => {
    return (
        <div className='home'>
            <Paper className='home__content' square={true}>
                <h1>Hello world!</h1>
            </Paper>
        </div>
    )
}
