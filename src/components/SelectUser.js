import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import '../styles/Login.css'
import { accountUserSelected, selectCurrentAccount } from '../state/slices/accountSlice'
import { useDispatch, useSelector } from 'react-redux'
import { LS_ACCOUNT_USER } from '../utils/consts'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        fontSize: '20px',
        width: '90px',
        backgroundColor: '#34495e',
        color: '#FFFFFF'
    }
}))


function SelectUser() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const { users } = useSelector(selectCurrentAccount)

    const setUser = selectedUser => {
        localStorage.setItem(LS_ACCOUNT_USER, selectedUser)
        dispatch(accountUserSelected(selectedUser))
    }

    return (
        users.length
            ? <div>
                <h1>תבחר/י משתמש</h1>
                <div id="user-container">
                    {users.map(u => <Button key={u} variant="contained" onClick={() => setUser(u)} className={classes.button}>{u}</Button>)}
                </div>
            </div>
            : <div>
                <h1>הגדר משתמשים בעמוד ההגדרות</h1>
            </div>
    )
}

export default SelectUser