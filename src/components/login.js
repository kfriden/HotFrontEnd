import React, { Component } from 'react';
import Auth from './auth';
import Juan from '../../static/assets/juan-auth.jpg';

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }

    handleUnSuccessfulAuth() {
        this.props.handleUnSuccessfulLogin();
    }

    render() {
        return (
            <div className="login-layout">
                <div className="left-column">
                    <img src={Juan} />
                </div>
                
                <Auth
                    handleSuccessfulAuth={this.handleSuccessfulAuth}
                    handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}
                />
                <div className="right-column">
                    <img src={Juan} />
                </div>
                
            </div>

            
        )
    }
}  


export default Login