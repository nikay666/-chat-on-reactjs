import React, {useState} from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info';

import { Link } from 'react-router-dom'

import { ButtonСustom } from '../../components/ButtonСustom'
import { InputСustom } from '../../components/InputСustom'
import { useFormik } from 'formik';

//TODO: deal with Formik

const validate = values => {
    const errors = {}

    if(!values.name) {
        errors.firstName = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!(values.password === values.passwordAgain)){
        errors.passwordAgain = 'Passwords do not match'
    }

    return errors
}


const RegistrationForm = () => {
    const [success, setSuccess] = useState(false)
    const  formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: '',
            passwordAgain: ''
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
                <Typography variant='h2' color='textPrimary'>Регистрация</Typography>
                <Typography 
                    color='textSecondary'>Для входа в чат, вам нужно зарегистрироваться</Typography>
            </div>

            <Card className='auth__form  auth__form-registration' elevation={8}>
                <CardContent component='form' onSubmit={formik.handleSubmit}>
                    {
                        success ?  <>
                            <InfoIcon className='icon-auth' color="primary"  fontSize="large" />
                            <Typography variant='h3' color='textPrimary'>Подтвердите свой аккаунт</Typography>
                            <Typography  color='textSecondary'>На Вашу почту отправлено письмо с ссылкой на подтверждениие аккаунта.</Typography>
                        </> : <>
                            <InputСustom 
                                required
                                type='email'
                                placeholder='E-mail' 
                                label='Email'  
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}   
                                                      
                                />
                
                            <InputСustom  
                                required
                                type='text'
                                placeholder='Ваше имя' 
                                label='Ваше имя' 
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}     
                            />
                            <InputСustom  
                                required
                                type='password'
                                placeholder='Пароль' 
                                label='Пароль' 
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}     
                            />
                            <InputСustom  
                                required
                                type='password'
                                placeholder='Повторить пароль' 
                                label='Повторить пароль' 
                                name="passwordAgain"
                                onChange={formik.handleChange}
                                value={formik.values.passwordAgain}  
                                   
                            />

                            {formik.touched.passwordAgain && formik.errors.passwordAgain ? (
                                    <div>{formik.errors.passwordAgain}</div>
                                ) : null}                          
                            <ButtonСustom 
                                type='submit'
                                color='primary'
                                variant="contained"
                                size='large'
                                fullWidth={true}
                           
                            >Зарегистрироваться</ButtonСustom>
                    
                        </>
                        
                    }
                    <ButtonСustom 
                        variant="text" 
                        color="primary" 
                        component={Link} 
                        to='/login'
                    >
                    Войти в аккаунт</ButtonСustom>
                </CardContent>
            </Card>
        </>
    )
}

export default RegistrationForm