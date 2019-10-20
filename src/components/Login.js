import React from 'react'
import { users } from '../utils'

function Login() {

    return (
        <div id="user-container">
            {users.map(u => <div class="user-box">{u}</div>)}
        </div>
    )
}

export default Login