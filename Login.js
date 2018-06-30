import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div>
            </div>
        );
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 4 && this.state.password.length > 4
    }

    
}

export default Login;