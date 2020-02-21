import React, { useEffect } from 'react'
import SignIn from './SignIn'
import Register from './Register'
import '../styles/SignIn.css'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapper from './SnackbarContentWrapper'
import { Redirect } from 'react-router-dom'

function AccountSignIn(props) {
    const [isLogin, setIsLogin] = React.useState(true)
    const [snackbar, setSnackbar] = React.useState({ open: false, message: '', variant: '' })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setSnackbar({ ...snackbar, open: false })
    }

    if(props.auth.authenticated) { return <Redirect to='/' /> }

    return (
        <div>
            <p style={{ textAlign: 'center' }}><img src="/logo_transparent.png" width="100px" height="100px" /></p>
            <div id="btn-container">
                <div id='btns'>
                    <div className={`toggle-btn ${isLogin ? null : 'selected'}`} onClick={() => setIsLogin(false)}>הרשמה</div>
                    <div className={`toggle-btn ${isLogin ? 'selected' : null}`} onClick={() => setIsLogin(true)}>התחברות</div>
                </div>
            </div>
            {isLogin ? <SignIn auth={props.auth} setCurrentAccount={props.setCurrentAccount} setSnackbar={setSnackbar} /> : <Register setIsLogin={setIsLogin} setSnackbar={setSnackbar} />}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={handleClose}
            >
                <SnackbarContentWrapper
                    onClose={handleClose}
                    variant={snackbar.variant}
                    message={snackbar.message}
                />
            </Snackbar>
        </div>
    )
}

export default AccountSignIn