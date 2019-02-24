import React from 'react'
import styles from './Button.less'

const Button = props => {
    let cls = [styles.btn];
    for (let n in props.classes) {
        cls.push(styles[props.classes[n]])
    }
    console.log(cls);
    return (
            <a href='/' className={cls.join(' ')}
               role="button"> {props.name} </a>
    )
};



export default Button

