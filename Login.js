import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Form />
            </div>
        );
    }
}

class Form extends React.Component {
    render() {
        return (
            <form >
                <label for="username">
                    Username
                    <input type="text" id="username" />
                </label>
                <label for="password">
                    Password
                    <input type="text" id="username" />
                </label>
            </form>
        );
    }
}

export default Login;