import React from 'react'
import style from './PageWrapper.module.scss'

interface IPageWrapperProps {
    children: JSX.Element | Array<JSX.Element>
}

const PageWrapper = (props: IPageWrapperProps) => (
    <div className={style.PageWrapper}>
        {props.children}
    </div>
)

export default PageWrapper
