import React from 'react'
import '../styles/SignIn.css'
import axios from 'axios'
import { API_URL, validateRegisterInput } from '../utils/utils'

function Register(props) {
    const [inputs, setInputs] = React.useState({ username: '', password: '', password2: '' })

    const handleInputs = e => setInputs({ ...inputs, [e.target.name]: e.target.value })

    const registerUser = async () => {
        const errors = validateRegisterInput(inputs).errors
        if(errors.username) {
           return props.setSnackbar({ open: true, message: errors.username, variant: 'error' })
        } else if(errors.password) {
            return props.setSnackbar({ open: true, message: errors.password, variant: 'error' })
        } else if(errors.password2) {
            return props.setSnackbar({ open: true, message: errors.password2, variant: 'error' })
        } else {
            await axios.post(`${API_URL}/api/register`, inputs)
            props.setSnackbar({ open: true, message: 'נרשמת בהצלחה בבקשה להתחבר עם מייל וסיסמא', variant: 'success' })
            props.setIsLogin(true)
        }
    }

    return (
        <div>
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