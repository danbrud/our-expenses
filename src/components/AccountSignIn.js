import React from 'react'
import SignIn from './SignIn'
import Register from './Register'
import '../styles/SignIn.css'

function AccountSignIn() {
    const [isLogin, setIsLogin] = React.useState(true)

    return (
        <div id='home-container'>
            {isLogin ? <SignIn setCurrentAccount={setCurrentAccount} /> : <Register setIsLogin={setIsLogin} />}
            <div id='btns'>
                <div onClick={() => setIsLogin(true)}>התחברות</div>
                <div onClick={() => setIsLogin(false)}>הרשמה</div>
            </div>
        </div>
    )
}

export default AccountSignIn