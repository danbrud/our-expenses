import React from 'react'
import '../styles/SignIn.css'
import axios from 'axios'
import { API_URL } from '../utils/utils'

function Register(props) {
    const [inputs, setInputs] = React.useState({ username: '', password: '', password2: '' })

    const handleInputs = e => setInputs({ ...inputs, [e.target.name]: e.target.value })

    const registerUser = async () => {
        await axios.post(`${API_URL}/api/register`, inputs)
        props.setIsLogin(true)
    }

    return (
        <div>
            <h2 className="welcome-text">הרשמה</h2>
            <div id="login">
                <div id="login-form">
                    <input className="login-form" type="email" placeholder="מייל" name="username" value={inputs.username} onChange={handleInputs} />
                    <input className="login-form" type="password" placeholder="סיסמא" name="password" value={inputs.password} onChange={handleInputs} />
                    <input className="login-form" type="password" placeholder="סיסמא 2" name="password2" value={inputs.password2} onChange={handleInputs} />
                </div>
                <div id="login-button" onClick={registerUser}>להרשם</div>
            </div>
        </div>
    )
}

export default Register