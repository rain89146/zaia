import InputElement from './InputElement';
import TextareaElement from './TextareaElement';
import mainstyles from './Form.module.scss';
export default function Form(props) {
    
    let {   
        title, 
        formStyles, 
        formContent,
        submitButton,
        valueUpdate,
        errorUpdate
    } = props;
    
    //  Custom styles
    let styles = (typeof formStyles !== 'undefined')
        ?   formStyles
        :   mainstyles;
    
    //  Form title
    title = (typeof title !== 'undefined')
        ?   <div className={styles.titlecon}><h1>{title}</h1></div>
        :   null;

    return (
        <div className={styles.con}>
            {title}
            <div className={styles.formcon}>{
                (formContent !== null ) && formContent.map((cnts,i) => {
                    let {type} = cnts;

                    switch(type) {
                        case 'input':
                            return (
                                <div className={styles.formelement} key={i}>
                                    <InputElement 
                                        {...cnts} 
                                        index={i}
                                        styles={styles}
                                        valueUpdate={valueUpdate}
                                        errorUpdate={errorUpdate}
                                    />
                                </div>
                            )
                        case 'textarea':
                            return (
                                <div className={styles.formelement} key={i}>
                                    <TextareaElement 
                                        {...cnts} 
                                        index={i}
                                        styles={styles}
                                        valueUpdate={valueUpdate}
                                        errorUpdate={errorUpdate}
                                    />
                                </div>
                            )
                            break;
                    }
                })
            }</div>
            <div className={styles.buttoncon}>{submitButton}</div>
        </div>
    )
}