import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Button } from 'react-bootstrap';
import "../css/login.css"


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
            password: "",
            successAlertShowing: false,
            failureAlertShowing: false
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
        this.setState({ [elementId]: elementValue });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("handleSubmit");
        console.log(this.state);
        fetch("http://localhost:32323/authenticate", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(function (res) {
            return res.json();
        }).then(data => {
            this.setState({
                username: '',
                password: '',
                successAlertShowing: data.found,
                failureAlertShowing: !data.found
            });
        });
    }

    render() {
        return (
            <div id="loginFormAndAlert">
                <Form horizontal onSubmit={this.handleSubmit} id="loginForm">
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
                                disabled={!this.validateForm()}>Sign In</button>
                        </Col>
                    </FormGroup>
                </Form>
                <div id="loginSucessAlert">
                    {
                        this.state.successAlertShowing ?
                            <div class="alert alert-success" role="alert">
                                <strong>Login Success!</strong>.
                            </div> : null
                    }
                </div>
                <div id="loginFailureAlert">
                    {
                        this.state.failureAlertShowing ?
                            <div class="alert alert-danger" role="alert">
                                <strong>Login Failure!</strong>.
                            </div> : null
                    }
                </div>
            </div>
        );
    }
}

export default Login;