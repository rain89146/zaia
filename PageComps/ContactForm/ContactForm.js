import React, {useState, useEffect} from 'react'
import Form from '../../Comps/FormComps/Form'
import FormStyle from './FormStyle.module.scss'
import Tools from '../../GlobalTools/Tools'
import styles from './ContactForm.module.scss'
import MessageAfterSubmit from './MessageAfterSubmit'

export default function ContactForm(props) {

    //  Global tools
    const tool = new Tools();

    //  Form content
    const Form_content = {
        type: 'form',
        btntext: 'Send',
        content: [
            {
                type: 'input',
                label: 'Your Name',
                element_type: 'text',
                name: 'fullname',
                datatype: 'name',
                datatype_error: 'Incorrect name format',
                max: '80',
                placeholder: 'like John Smith',
                error: 'Enter your fullname',
                required: true
            },
            {
                type: 'input',
                label: 'Your Phone',
                element_type: 'tel',
                name: 'phone',
                datatype: 'phone',
                datatype_error: 'Incorrect phone format',
                max: '20',
                placeholder: `like '123 456 7890'`,
                error: 'Enter your phone',
                required: true
            },
            {
                type: 'input',
                label: 'Your Email',
                element_type: 'email',
                name: 'email',
                datatype: 'email',
                datatype_error: 'Incorrect email format',
                max: '80',
                placeholder: `like 'email@address.com'`,
                error: 'Enter your email',
                required: true
            },
            {
                type: 'textarea',
                label: 'Message',
                name: 'request',
                max: '1000',
                placeholder: 'Enter your message',
                error: 'Enter your message',
                required: true
            }
        ]
    }

    //  Close control
    const {control} = props;

    //  set the form content state
    const [FormElement, setFormElement] =   useState(null);
    const [IsSubmitting, setIsSubmitting] = useState(false);
    const [SubmitStatus, setSubmitResult] = useState(null);
    const [submitted, setSubmitted] =       useState(false);

    //  Update form content
    useEffect(() => {
        const converted_form = tool.form_conversion(Form_content.content);
        setFormElement(converted_form);
    }, []);

    //  Submission
    const form_submit = () => {

        //  Check for the empty fields and assign the has_error to false
        const form = tool.form_empty_checker(FormElement);
        setFormElement([...form]);

        //  Count the numeber of has_error falses
        const count = false_count(FormElement);
        if(count === 0){

            setIsSubmitting(true);
            disable_fields();

            //  API calling
            setTimeout(() => {

                enable_fields();
                setIsSubmitting(false);
                setSubmitted(true);
                setSubmitResult(true);

            }, 2000);
        }
    }

    //  Count false number
    const false_count = (form) => {
        let counter = 0;
        form.forEach(fm => {
            if(fm.has_error === true){
                counter ++
            }
        });
        return counter;
    }

    //  Disable all the fields when submitting
    const disable_fields = () => {
        let form = [...FormElement];
        form.forEach((el, i)=> {
            form[i].disable = true;
            setFormElement(form);
        })
    }

    //  Enable all the fields after submitting
    const enable_fields = () => {
        let form = [...FormElement];
        form.forEach((el, i)=> {
            form[i].disable = false;
            setFormElement(form);
        })
    }

    //  Update value
    const value_update = (value, index) => {
        let form = [...FormElement];
        form[index].value = value;
        setFormElement(form);
    }

    //  Update error
    const error_update = (value, index) => {
        let form = [...FormElement];
        form[index].has_error = value;
        setFormElement(form);
    }

    //  Try again, if submittion failed
    const tryagain = () => {
        setSubmitResult(null);
        setSubmitted(false);
    }

    //  close the modal, if submittion success
    const submitsuccess = () => control();

    //  Submit button
    let submitbutton = (IsSubmitting === false) 
        ?   <button onClick={()=>form_submit()}>{Form_content.btntext}</button>
        :   <button disabled>Sending...</button>

    //  After submittion
    let content = (submitted === true)
        ?   <MessageAfterSubmit status={SubmitStatus} success={submitsuccess} failed={tryagain}/>
        :   <Form 
                title={'Contact us'}
                formStyles={FormStyle}
                formContent={FormElement}
                valueUpdate={value_update}
                errorUpdate={error_update}
                submitButton = {submitbutton}
            />;

    return (
        <div className={styles.con}>
            <div className={styles.head}>
                <button onClick={()=>control()}>
                    <i className="material-icons">close</i>
                </button>
            </div>
            <div className={styles.formholder}>{content}</div>
        </div>
    )
}