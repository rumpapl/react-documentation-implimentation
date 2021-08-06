import React from 'react';
import GuestGreeting from './greeting/GuestGreeting';
import UserGreeting from './greeting/UserGreeting';

const Greeting = (props) => {
    if (props.isLogedIn)
        return <UserGreeting />;
    else
        return <GuestGreeting />;
}

export default Greeting
