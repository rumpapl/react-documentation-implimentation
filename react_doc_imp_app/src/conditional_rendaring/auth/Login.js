import React from 'react';
import Greeting from '../Greeting';
// import LoginBtn from './LoginBtn';
// import LogoutBtn from './LogoutBtn';
import CommonBtn from './CommonBtn';

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
            {/* <LoginBtn onClick={() => handleLogin()} />
            &nbsp;&nbsp;
            <LogoutBtn onClick={() => handleLogout()} /> */}

            <CommonBtn onClick={() => handleLogin()}>Login</CommonBtn>
            &nbsp;&nbsp;
            <CommonBtn onClick={() => handleLogout()}>Logout</CommonBtn>
        </div>
    )
}

export default Login
