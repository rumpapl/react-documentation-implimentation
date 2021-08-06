import React from 'react'

const FunctionalCom = () => {
    function handleClick(data) {
        console.log('in function com');
        console.log('user: '+data);
    }
    return (
        <div>
            <h1>functional com</h1>
            <br />
            <button onClick={() =>handleClick('rumpa')}>click me</button>
        </div>
    )
}

export default FunctionalCom
