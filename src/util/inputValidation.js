
export const inputTypes = new Map([
    ['email', /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ]
])


export const isInputValid = (type, value) => {
    let res;
    if(type === 'email'){
        //just now only checking email
        if(inputTypes.get(type)){
            value.match(inputTypes.get(type)) ? res = true  : res = false
        }
    } else{
        res = true
    }

    return res
}


export const validate = values => {
    const errors = {}

    if(values.name && !values.name) {
        errors.firstName = 'Required';
    }

    if (values.email && !values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(values.passwordAgain && !(values.password === values.passwordAgain)){
        errors.passwordAgain = 'Passwords do not match'
    }

    return errors
}
