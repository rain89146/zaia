export default function useValidation(form) {
    form.map(fe => {
        let {required, value}  = fe;
        if(required && value === '' ){
            fe.has_error = true;
        }
    });
    return form;
}
