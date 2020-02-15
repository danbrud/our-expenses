import React from 'react'
import '../styles/SignIn.css'
import axios from 'axios'
import jwt_decode from "jwt-decode"
import { API_URL, setAuthToken } from '../utils'

function SignIn(props) {
    const [inputs, setInputs] = React.useState({ username: '', password: '' })

    const handleInputs = e => setInputs({ ...inputs, [e.target.name]: e.target.value })

    const loginUser = async () => {
        const res = await axios.post(`${API_URL}/api/login`, inputs)

        const { token } = res.data
        localStorage.setItem("token", token)
        
        setAuthToken(token)
        const decoded = jwt_decode(token)
        props.setCurrentAccount(decoded)
    }

    return (
        <div>
            <h2 className="welcome-text">התחברות</h2>
            <div id="login">
                <div id="login-form">
                    <input className="login-form" type="email" placeholder="מייל" name="username" value={inputs.username} onChange={handleInputs} />
                    <input className="login-form" type="password" placeholder="סיסמא" name="password" value={inputs.password} onChange={handleInputs} />
                </div>
                <div id="login-button" onClick={loginUser}>להתחבר</div>
            </div>
        </div>
    )
}

export default SignIn