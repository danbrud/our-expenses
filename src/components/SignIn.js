import React from 'react'
import '../styles/SignIn.css'

function SignIn(props) {


    return (
        <div id="landing">
            <h5 className="welcome-text">WELCOME TO FOOD-FRIENDS</h5    >
            <p className="welcome-text">The best way to find your dining mate!</p>
            <div id="login">
                <div id="loginForm">
                    <input className="login-form" type="email" placeholder="Enter Email" name="email" />
                    <input className="login-form" type="password" placeholder="Enter Password" name="password"  />
                </div>
                <div id="loginButton">LOG IN</div>
                {/* <div id="loginButton" onClick={this.checkLogin} >LOG IN</div> */}
                {/* {this.state.invalidLogin ?
                    <div className="error">Wrong Email or Password</div> :
                    null} */}
                <div id="navigateToRegister">
                    {/* <div id="registerLink" onClick={this.changeLogin}>Not a member? Sign Up</div> */}
                    <div id="registerLink">Not a member? Sign Up</div>
                </div>
            </div>
        </div>
    )
}

export default SignIn