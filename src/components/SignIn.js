import React from 'react'
import '../styles/SignIn.css'
import axios from 'axios'
import { API_URL } from '../utils/utils'

function SignIn(props) {
    const [inputs, setInputs] = React.useState({ username: '', password: '' })

    const handleInputs = e => setInputs({ ...inputs, [e.target.name]: e.target.value })

    const loginUser = async () => {
        const res = await axios.post(`${API_URL}/api/login`, inputs)

        const { token } = res.data
        props.auth.login(token)
        window.location = '/'
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