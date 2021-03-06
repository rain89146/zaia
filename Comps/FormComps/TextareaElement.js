import React, {useState, useRef} from 'react'
export default function TextareaElement(props) {

    //  Get all values from props
    let {label, name, placeholder, max, error, required, disable, has_error, value, styles} = props;

    //  update to the parent
    let {valueUpdate, errorUpdate, index} = props;

    //  Set the state
    const [TextareaValue, setTextareaValue] = useState('');
    const [TextareaError, setTextareaError] = useState(error);

    //  Reffere to input element
    const textareaElement = useRef(null);
    
    //  required sign
    let requried_sign = (required)
        ?   <span>*</span>
        :   null;

    //  on focus
    const textareaOnFocus = () => {
        setTextareaError(null);
        errorUpdate(false, index);
    }
    
    //  on blur
    const textareaOnBlur = (e) => {
        let {value} = e.target;
        if(required){
            if(value === ''){
                setTextareaError(error)
                errorUpdate(true, index);
            }else{
                errorUpdate(false, index);
            }
        }
    }

    //  on change
    const textareaOnChange = (e) => {
        let {value} = e.target;
        setTextareaValue(value);
        valueUpdate(value, index);
    }

    //  error box
    let errorbox = (has_error === true)
        ?   <div className={styles.errorbox}>{TextareaError}</div>
        :   null;

    return (
        <div className={styles.textcon}>
            <div className={styles.labelcon}>
                <label htmlFor={textareaElement}>{label}{requried_sign}</label>
            </div>        
            <div className={styles.textareacon}>
                <textarea 
                    name={name} 
                    placeholder={placeholder} 
                    maxLength={max} 
                    value={TextareaValue}
                    onBlur = {(e)=>textareaOnBlur(e)}
                    onFocus ={(e)=>textareaOnFocus(e)}
                    onChange ={(e)=>textareaOnChange(e)}
                    rows={4}
                    disabled={disable}
                ></textarea>
            </div>
            {errorbox}
        </div>
    )
}
