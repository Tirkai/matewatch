import React from 'react'
import style from './SectionTitle.module.scss'


interface ISectionTitleProps{
    title: string
}

const SectionTitle = (props: ISectionTitleProps) => {
    return (
        <div className={style.SectionTitle}>
            {props.title}
        </div>
    )
}

export default SectionTitle
