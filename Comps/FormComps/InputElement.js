import React, {useState} from 'react'
import Tools from '../../GlobalTools/Tools';

export default function InputElement(props) {

    //  
    const tools = new Tools();

    //  Get all values from props
    const {label, element_type, name, max, placeholder, datatype, datatype_error, error, required, has_error, value, styles} = props;

    //  update to the parent
    const {valueUpdate, errorUpdate, disable, index} = props;

    //  Set the state
    const [InputValue, setInputValue] = useState(value);
    const [InputError, setInputError] = useState(error);

    //  On change
    const inputOnChange = (e) => {
        setInputValue(e.target.value)
        valueUpdate(e.target.value, index);
    };

    //  On focus
    const inputOnFocus = () => {
        setInputError(null);
        errorUpdate(false, index);
    }

    //  On blur
    const inputOnBlur = (e) => {
        const {value} = e.target; 
        if(value !== ''){

            const validation_result = tools.input_validation(value, datatype, datatype_error);
            const {result, message} = validation_result;

            if(result === false){
                setInputError(message);
                errorUpdate(true, index)
            }
        }
    }

    //  Input config
    const input_config = { 
        id: name,
        type: element_type, 
        placeholder,
        name,
        alt: label,
        maxLength: max,
        value: InputValue,
        onChange: (e) => inputOnChange(e),
        onFocus: (e) => inputOnFocus(e),
        onBlur: (e) => inputOnBlur(e),
        disabled: disable
    }

    return (
        <div className={styles.inpitcon}>
            <div className={styles.labelcon}>
                <label htmlFor={name}>{label}{(required) && <span>*</span>}</label>
            </div>
            <div className={styles.input}>
                <input {...input_config}/>
            </div>
            {(has_error === true) && <div className={styles.errorbox}>{(!!InputError) ? InputError : error }</div>}
        </div>
    )
}