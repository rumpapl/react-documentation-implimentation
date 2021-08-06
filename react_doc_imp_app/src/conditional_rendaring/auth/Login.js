import React from 'react';
import Greeting from '../Greeting';
// import LoginBtn from './LoginBtn';
// import LogoutBtn from './LogoutBtn';
import CommonBtn from './CommonBtn';
import './style/style.css';

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

    let btn;
    if (isLogedIn) {
        btn = <CommonBtn onClick={() => handleLogout()} btn_style='logout-btn'>Logout</CommonBtn>
    }
    else {
        btn = <CommonBtn onClick={() => handleLogin()} btn_style='login-btn'>Login</CommonBtn>
      
    }

    return (
        <div>

            <Greeting isLogedIn={isLogedIn} />
            {console.log('IsLogedIn: ' + isLogedIn)}
            <br />
            {btn}
            {/* <LoginBtn onClick={() => handleLogin()} />
            &nbsp;&nbsp;
            <LogoutBtn onClick={() => handleLogout()} /> */}

            {/* <CommonBtn onClick={() => handleLogin()} btn_style='login-btn'>Login</CommonBtn>
            &nbsp;&nbsp;
            <CommonBtn onClick={() => handleLogout()} btn_style='logout-btn'>Logout</CommonBtn> */}
        </div>
    )
}

export default Login
