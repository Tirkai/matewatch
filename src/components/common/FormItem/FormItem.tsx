import React from 'react'

import style from './FormItem.module.scss'

interface IFormItemProps {
    label?: string;
    children: JSX.Element | Array<JSX.Element>;
}

const FormItem = (props: IFormItemProps) => (
    <div className={style.FormItem}>
        {props.label ? (<div className={style.Label}>{props.label}</div>) : ""}
        <div className={style.Content}>
            {props.children}
        </div>
    </div>
)

export default FormItem
