import React from 'react'

const CommonBtn = ({onClick,children}) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default CommonBtn
