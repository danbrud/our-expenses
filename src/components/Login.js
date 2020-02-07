import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../styles/Login.css'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        fontSize: '20px',
        width: '90px',
        backgroundColor: '#34495e',
        color: '#FFFFFF'
    }
}))


function Login(props) {
    const classes = useStyles()

    const setUser = user => {
        localStorage.userName = user
        props.setCurrentUser(user)
    }

    return (
        <div>
            <h1>תבחר/י משתמש</h1>
            <div id="user-container">
                {props.users.map(u => <Button key={u} variant="contained" onClick={() => setUser(u)} className={classes.button}>{u}</Button>)}
            </div>
        </div>
    )
}

export default Login