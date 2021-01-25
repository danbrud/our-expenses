import React, { useState } from 'react'
import '../styles/SignIn.css'
import axios from 'axios'
import { API_URL, validateLoginInput } from '../utils/utils'
import Loader from './Loader'

function SignIn({ auth, setSnackbar }) {
    const [inputs, setInputs] = useState({ username: '', password: '' })
    const [isLoading, setIsLoading] = useState(false)

    const handleInputs = e => setInputs({ ...inputs, [e.target.name]: e.target.value })

    const loginUser = async () => {
        const isValid = validateLoginInput(inputs).isValid
        if (!isValid) {
            return setSnackbar({ open: true, message: 'בבקשה להכניס מייל וסיסמא תקינים', variant: 'error' })
        }

        let res
        try {
            setIsLoading(true)
            res = await axios.post(`${API_URL}/api/login`, inputs)
        } catch (err) {
            setIsLoading(false)
            return setSnackbar({ open: true, message: 'מייל או סיסמא לא נכונים. נסה שוב', variant: 'error' })
        }

        const { token } = res.data
        auth.login(token)
        window.location = '/'
    }

    return (
        <div>
            {
                isLoading
                    ? <Loader />
                    : (
                        <div id="login">
                            <div id="login-form">
                                <input className="login-form" type="email" placeholder="מייל" name="username" value={inputs.username} onChange={handleInputs} />
                                <input className="login-form" type="password" placeholder="סיסמא" name="password" value={inputs.password} onChange={handleInputs} />
                            </div>
                            <div id="login-button" onClick={loginUser}>להתחבר</div>
                        </div>
                    )
            }
        </div>
    )
}

export default SignIn