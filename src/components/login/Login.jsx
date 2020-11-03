import React, { Component } from 'react'
import './Login.scss'

export default class Login extends Component {
    render() {
        return (

            <div className="login-container">
                <form>
                    {/* <img src="/img/logo-appyhour.svg" alt="Appy Hour Tours" /> */}
                    <h1>Login</h1>
                    <div className="form-group">
                        <input type="text" required="required" />
                        <label for="input" className="control-label">User</label><i className="bar"></i>
                    </div>
                    <div className="form-group">
                        <input type="password" required="required" />
                        <label for="input" className="control-label">Password</label><i className="bar"></i>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" /><i className="helper"></i>Remember
                        </label>
                    </div>

                </form>
                <div className="button-container">
                    <button type="button" className="button"><span>Submit</span></button>
                </div>
            </div>
        )
    }
}
