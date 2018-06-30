import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
class Login extends React.Component {

    render() {
        return (
            <div className="loginForm">
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
            <Form horizontal>
                <FormGroup controlId="username">
                    <Col componentClass={ControlLabel} sm={4}>
                        Username
                    </Col>
                    <Col componentClass={ControlLabel} sm={4}>
                        <FormControl 
                            type="text" 
                            value={this.state.username} 
                            onChange={this.state.handleChange} 
                            autoFocus />
                    </Col>                    
                </FormGroup>
                <FormGroup controlId="password">
                    <Col componentClass={ControlLabel} sm={4}>
                        Password
                    </Col>
                    <Col componentClass={ControlLabel} sm={4}>
                        <FormControl 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.state.handleChange} />
                    </Col>                    
                </FormGroup>
            </Form>
        );
    }
}

export default Login;