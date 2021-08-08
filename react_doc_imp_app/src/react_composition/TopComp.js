import React from 'react'

const TopComp = (props) => {
    return (
        <div>
            <h1>Top component</h1>
            <span>This one from props: {props.title}</span>
        </div>
    )
}

export default TopComp
