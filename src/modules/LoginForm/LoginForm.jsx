import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { ButtonСustom } from '../../components/ButtonСustom'
import { InputСustom } from '../../components/InputСustom'
import { useFormik } from 'formik'
import { validate } from '../../util/inputValidation'



// const validate = values => {
//     const errors = {}
//     if (!values.email) {
//         errors.email = 'Required';
//       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     return errors
// }

const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            email:  '',
            password: ''
        },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        }
    })


    return (
        <>
            <div className="auth__title">
                    <h1 className='visually-hidden'>Чат на ReactJS</h1>
                    <Typography variant='h2' color='textPrimary'>Войти в аккаунт</Typography>
                    <Typography 
                        color='textSecondary'
                    >Пожалуйста, войдите в свой аккаунт</Typography>
            </div>
            <Card className='auth__form auth__form-login' elevation={8}>
                <CardContent component='form'  onSubmit={formik.handleSubmit}>
                <InputСustom  
                    required
                    type='email'
                    placeholder='user@gmail.com' 
                    label='Логин'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}   
                    error={formik.errors.email ? true : false}       
                    helperText={formik.errors.email ? formik.errors.email : null} 
                />
                <InputСustom  
                    required
                    type='password'
                    placeholder='Пароль' 
                    label='Пароль' 
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}   
                />
                <ButtonСustom 
                    type='submit'
                    color='primary'
                    variant="contained"
                    size='large'
                    fullWidth={true}
                >Войти в аккаунт</ButtonСustom>
                    <ButtonСustom 
                        variant="text" 
                        color="primary"
                        component={Link}
                        to='registration'
                    >Зарегистрироваться</ButtonСustom>
                </CardContent>
            </Card>
        </>
    )
}

export default LoginForm