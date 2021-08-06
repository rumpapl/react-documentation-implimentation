import React from 'react';
import Greeting from '../Greeting';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';

const Login = () => {
    const [isLogedIn, setIsLogedIn] = React.useState(false);

    function handleLogin() {
        console.log('login clicked');
        // console.log('IsLogedIn: ' + isLogedIn);
        setIsLogedIn(true);

    }
    function handleLogout() {
        console.log('logout clicked');
        // console.log('IsLogedIn: ' + isLogedIn);
        setIsLogedIn(false);
    }
    return (
        <div>

            <Greeting isLogedIn={isLogedIn} />
            {console.log('IsLogedIn: ' + isLogedIn)}
            <br />
            <LoginBtn onClick={() => handleLogin()} />
            &nbsp;&nbsp;
            <LogoutBtn onClick={() => handleLogout()} />
        </div>
    )
}

export default Login
