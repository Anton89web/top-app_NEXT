import React, {ForwardedRef, forwardRef} from 'react';
import cn from "classnames";
import styles from "./Card.module.css";
import {CardProps} from "./Card.props";

const  Card = forwardRef(({color, children, className, ...props}: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div
            className={cn(styles.card, className, {
            [styles.blue]: color == "blue"
            })}
            ref={ref}
            {...props}
        >
            {children}
        </div>
    );
});
Card.displayName = 'Card';
export default Card;
