import {useState} from 'react'
export default function TextareaElement(props) {

    //  Get all values from props
    const {label, name, placeholder, max, error, required, disable, has_error, value, styles} = props;

    //  update to the parent
    const {valueUpdate, errorUpdate, index} = props;

    //  Set the state
    const [TextareaError, setTextareaError] = useState(error);

    //  on focus
    const textareaOnFocus = () => {
        setTextareaError(null);
        errorUpdate(false, index);
    }

    //  on change
    const textareaOnChange = (e) => valueUpdate(e.target.value, index);

    //  Textarea config
    const textarea_config = { 
        id: name,
        name, 
        placeholder, 
        maxLength: max,
        value,
        onFocus: (e)=>textareaOnFocus(e),
        onChange: (e)=>textareaOnChange(e),
        rows: 4,
        disabled: disable
    }

    return (
        <div className={styles.textcon}>
            <div className={styles.labelcon}>
                <label htmlFor={name}>{label}{(required) && <span>*</span>}</label>
            </div>        
            <div className={styles.textareacon}>
                <textarea {...textarea_config}></textarea>
            </div>
            {(has_error === true) && <div className={styles.errorbox}>{(!!TextareaError) ? TextareaError : error}</div>}
        </div>
    )
}
