import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Button } from 'react-bootstrap';
import "./index.css"


class Login extends React.Component {

    render() {
        return (
            <div className="loginForm centered">
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
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.username.length > 4 && this.state.password.length > 4
    }

    handleChange(e) {
        var elementId = e.target.id;
        var elementValue = e.target.value;
        this.setState({[elementId]: elementValue});
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
                    <Col componentClass={ControlLabel} sm={8}>
                        <FormControl 
                            type="text" 
                            value={this.state.username} 
                            onChange={this.handleChange}
                            placeholder="min 5 chars req"
                            autoFocus />
                    </Col>                    
                </FormGroup>
                <FormGroup controlId="password">
                    <Col componentClass={ControlLabel} sm={4}>
                        Password
                    </Col>
                    <Col componentClass={ControlLabel} sm={8}>
                        <FormControl 
                            type="password" 
                            value={this.state.password} 
                            placeholder="min 5 chars req"
                            onChange={this.handleChange} />
                    </Col>                    
                </FormGroup>
                <FormGroup controlId="submit">
                    <Col smOffset={4} sm={8}>
                        <button 
                            type="submit" 
                            class="btn btn-success"
                            disabled={!this.validateForm()}
                            onSubmit={this.handleSubmit}>Sign In</button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default Login;