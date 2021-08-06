import React from 'react'

const CommonBtn = ({onClick,children, btn_style}) => {
    return (
        <button onClick={onClick} className={btn_style}>{children}</button>
    )
}

export default CommonBtn
