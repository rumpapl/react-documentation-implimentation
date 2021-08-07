import React from 'react'

const Form = () => {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(event) {
        console.log('handle submit event');
        console.log(name + ' ' + password);
        event.preventDefault();
    }

    function handleChange(event, elementName) {
        event.preventDefault();
        if (elementName === 'name') {
            console.log('handle change name');
            setName(event.target.value);
        }
        else if (elementName === 'password') {
            console.log('handle change password');
            setPassword(event.target.value);
        }
    }

    return (
        <div>
            <h1>Login Form</h1>
            <div>
                <label>
                    Name: <input type='text' value={name || ''} placeholder='Enter name' onChange={(e) => handleChange(e, 'name')} />
                </label>
                <br />
                <br />
                <label>
                    Password: <input type='password' value={password || ''} placeholder='Enter password' onChange={(e) => handleChange(e, 'password')} />
                </label>
                <br />
                <br />
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Form
