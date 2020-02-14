import React from 'react'
import '../styles/SignIn.css'

function Register() {
    const [inputs, setInputs] = React.useState({ username: '', password: '', password2: '' })

    const handleInputs = e => setInputs({ ...inputs, [e.target.name]: e.target.value })

    return (
        <div>
            <h2 className="welcome-text">הרשמה</h2>
            <div id="login">
                <div id="login-form">
                    <input className="login-form" type="email" placeholder="מייל" name="username" value={inputs.username} onChange={handleInputs} />
                    <input className="login-form" type="password" placeholder="סיסמא" name="password" value={inputs.password} onChange={handleInputs} />
                    <input className="login-form" type="password" placeholder="סיסמא 2" name="password2" value={inputs.password2} onChange={handleInputs} />
                </div>
                <div id="login-button">להרשם</div>
            </div>
        </div>
    )
}

export default Register