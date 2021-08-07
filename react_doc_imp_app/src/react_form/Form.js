import React from 'react'

const Form = () => {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChangeName(event) {
        console.log('handle change name');
        setName(event.target.value);
        event.preventDefault();
    }

    function handleChangePassword(event) {
        console.log('handle change password');
        setPassword(event.target.value);
        event.preventDefault();
    }

    function handleSubmit(event){
        console.log('handle submit event');
        console.log(name+' '+password);
        event.preventDefault();
    }

    return (
        <div>
            <h1>Login Form</h1>
            <span>{name}</span>
            <br/>
            <span>{password}</span>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input type='text' value={name || ''} placeholder='Enter name' onChange={handleChangeName} />
                </label>
                <br />
                <br />
                <label>
                    Password: <input type='password' value={password || ''} placeholder='Enter password' onChange={handleChangePassword} />
                </label>
                <br />
                <br />
                <input type='submit' value="Submit"/>
            </form>
        </div>
    )
}

export default Form
