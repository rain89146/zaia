import React, {useState} from 'react'
import useInputValidation from '../../hooks/useInputValidation';
import Tools from '../../GlobalTools/Tools';

export default function InputElement(props) {

    //  
    const tools = new Tools();

    //  Get all values from props
    let {label, element_type, name, max, placeholder, datatype, datatype_error, error, required, has_error, value, styles} = props;

    //  update to the parent
    let {valueUpdate, errorUpdate, disable, index} = props;

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
        let {value} = e.target; 
        if(value !== ''){
            let validation_result = tools.input_validation(value, datatype, datatype_error);
            let {result, message} = validation_result;

            if(result === false){
                setInputError(message);
                errorUpdate(true, index)
            }
        }
    }

    //  Error
    let errorbox = (has_error === true)
        ?   <div className={styles.errorbox}>{InputError}</div>
        :   null;

    //  Required sign
    let requried_sign = (required)
        ?   <span>*</span>
        :   null;
 
    return (
        <div className={styles.inpitcon}>
            <div className={styles.labelcon}>
                <label>{label}{requried_sign}</label>
            </div>
            <div className={styles.input}>
                <input 
                    type={element_type} 
                    placeholder={placeholder}
                    name={name}
                    alt={label}
                    maxLength={max}
                    value={InputValue}
                    onChange={(e) => inputOnChange(e)}
                    onFocus={(e)=> inputOnFocus(e)}
                    onBlur={(e)=> inputOnBlur(e)}
                    disabled={disable}
                />
            </div>
            {errorbox}
        </div>
    )
}