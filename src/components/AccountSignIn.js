import React, { useEffect } from 'react'
import SignIn from './SignIn'
import Register from './Register'
import '../styles/SignIn.css'
import { Redirect } from 'react-router-dom'

function AccountSignIn(props) {
    const [isLogin, setIsLogin] = React.useState(true)

    // useEffect(() => {
    //     if (auth.authenticated) {
    //         window.location = '/'
    //     }
    // }, [])

    return (
        <div id='home-container'>
            {isLogin ? <SignIn auth={props.auth} setCurrentAccount={props.setCurrentAccount} /> : <Register setIsLogin={setIsLogin} />}
            <div id='btns'>
                <div onClick={() => setIsLogin(true)}>התחברות</div>
                <div onClick={() => setIsLogin(false)}>הרשמה</div>
            </div>
        </div>
    )
}

export default AccountSignIn