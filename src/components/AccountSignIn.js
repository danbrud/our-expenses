import React from 'react'
import SignIn from './SignIn'
import Register from './Register'

function AccountSignIn() {
    const [isLogin, setIsLogin] = React.useState(true)

    return (
        <div>
            { isLogin ? <SignIn /> : <Register /> }
            <div onClick={() => setIsLogin(true)}>התחברות</div>
            <div onClick={() => setIsLogin(false)}>הרשמה</div>
        </div>
    )
}

export default AccountSignIn