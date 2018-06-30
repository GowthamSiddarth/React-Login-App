import React from 'react';
import { FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
class Login extends React.Component {

    render() {
        return (
            <div>
                <LoginForm />
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

    handleChange() {

    }

    handleSubmit() {

    }

    render() {
        return (
            <div className="loginForm">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" value={this.state.username} onChange={this.state.handleChange} autoFocus/>                        
                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password" value={this.state.password} onChange={this.state.handleChange} />
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default Login;