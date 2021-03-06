function Tools() {
    
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

    this.form_conversion = form_conversion;
}

export default Tools;