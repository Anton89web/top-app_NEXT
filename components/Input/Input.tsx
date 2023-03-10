import React, {ForwardedRef, forwardRef} from 'react';
import cn from "classnames";
import styles from "./Input.module.css";
import {InputProps} from "./Input.props";
import TextArea from "../TextArea/TextArea";

const Input = forwardRef(({className, error, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(styles.inputWrapper, className)}>
            <input className={cn( styles.input, {
                [styles.error]: error
            })} ref={ref} {...props}/>
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});
Input.displayName = 'Input';
export default Input;
