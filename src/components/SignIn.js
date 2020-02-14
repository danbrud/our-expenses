import React from 'react'
import '../styles/SignIn.css'

function SignIn() {
    const [inputs, setInputs] = React.useState({ username: '', password: '' })

    const handleInputs = e => setInputs({ ...inputs, [e.target.name]: e.target.value })

    return (
        <div>
            <h2 className="welcome-text">התחברות</h2>
            <div id="login">
                <div id="login-form">
                    <input className="login-form" type="email" placeholder="מייל" name="username" value={inputs.username} onChange={handleInputs} />
                    <input className="login-form" type="password" placeholder="סיסמא" name="password" value={inputs.password} onChange={handleInputs} />
                </div>
                <div id="login-button">להתחבר</div>
            </div>
        </div>
    )
}

export default SignIn