import parse from 'html-react-parser';

function Tools() {

    //  Parse string to html
    const parse_html = (str) => {
        return <>{parse(str)}</>
    }
    
    //  Add attr to form component
    const form_conversion = (form) => {

        let arr = [];
        form.forEach(element => {
            element['disable'] = false;
            element['value']='';
            element['has_error'] = false;
            arr.push(element);
        });
        return arr;
    }

    //  form empty field checker
    const form_empty_checker = (form) => {
        return form.map(fe => {
            let {required, value}  = fe;
            if(required && value === '' ){
                fe.has_error = true;
            }
            return fe;
        });
    }

    //  Input validation
    const input_validation = (value, datatype, datatype_error) => {
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
    const name_validation = (value, datatype_error) => {
        let reg = /^[\u00C0-\u017Fa-zA-Z'’‘’][\u00C0-\u017Fa-zA-Z’‘’' -]+[\u00C0-\u017Fa-zA-Z'’‘’]?$/;
        let res = reg.test(value);
        return (res) ? {result: true} : {result: false, message: datatype_error}
    }

    //  Validate phone
    const phone_validation = (value, datatype_error) => {
        let reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        let res = reg.test(value);
        return (res) ? {result: true} : {result: false, message: datatype_error}
    }

    //  Validate email
    const email_validation = (value, datatype_error) => {
        let reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let res = reg.test(value);
        return (res) ? {result: true} : {result: false, message: datatype_error}
    }

    //  
    this.parse_html = parse_html;
    this.form_empty_checker = form_empty_checker;
    this.form_conversion = form_conversion;
    this.input_validation = input_validation;
}

export default Tools;