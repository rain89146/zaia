export default function useInputValidation(value, datatype, datatype_error) {

    let validation_obj = {
        result: false,
        message: 'Undefined message'
    }
    switch(datatype){
        case 'name':
            validation_obj = name_validation(value, datatype_error);
            break;
        case 'phone':
            validation_obj = phone_validation(value, datatype_error);
            break;
        case 'email':
            validation_obj = email_validation(value, datatype_error);
            break;
    }
    return validation_obj;
}


//  Valiadate name
function name_validation (value, datatype_error) {
    let reg = /^[\u00C0-\u017Fa-zA-Z'’‘’][\u00C0-\u017Fa-zA-Z’‘’' -]+[\u00C0-\u017Fa-zA-Z'’‘’]?$/;
    let res = reg.test(value);
    return (res) ? {result: true} : {result: false, message: datatype_error}
}

//  Validate phone
function phone_validation (value, datatype_error) {
    let reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    let res = reg.test(value);
    return (res) ? {result: true} : {result: false, message: datatype_error}
}

//  Validate email
function email_validation (value, datatype_error) {
    let reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let res = reg.test(value);
    return (res) ? {result: true} : {result: false, message: datatype_error}
}