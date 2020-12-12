
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