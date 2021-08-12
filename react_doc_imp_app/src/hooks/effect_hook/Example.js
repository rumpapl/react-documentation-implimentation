import React, { useEffect } from 'react'

const Example = () => {
    const [count, setCount] = React.useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        console.log( 'hello' );
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;

    });

    function hangleClick(arg) {
        if (arg) {
            setCount(count + 1);
        }
        else {
            setCount(0);
        }
        console.log('handle click');

    }

    return (
        <div>
            <p>You Clicked {count} times.</p>
            <button onClick={() => hangleClick(1)}>Click me</button>
            &nbsp;
            &nbsp;
            <button onClick={() => hangleClick(0)}>Reset me</button>
        </div>
    )
}

export default Example
