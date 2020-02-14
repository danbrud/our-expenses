import React, { useEffect } from 'react'
import DateSelector from './DateSelector';
import axios from 'axios'
import { API_URL } from '../utils';
import '../styles/AddExpense.css'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapper from './SnackbarContentWrapper'

function AddExpense(props) {
    const [state, setState] = React.useState({ user: props.currentUser, amount: '', expense: '', category: '', date: new Date() })
    const [open, setOpen] = React.useState(false)
    const amountInput = React.createRef()

    useEffect(() => {
        amountInput.current.focus()
    }, [])

    const handleInputs = e => setState({ ...state, [e.target.name]: e.target.value })
    const changeDate = date => setState({ ...state, date })

    const validateInputs = (user, amount, expense, category) => user && amount && expense && category ? true : false

    const addExpense = async (user, amount, expense, category, date) => {
        const newExpense = { user, expense, amount, category, date, accountId: props.currentAccount._id }
        const res = await axios.post(`${API_URL}/api/expense`, newExpense)
        props.setExpenses([...props.currentAccount.expenses, res.data._id])

        window.location = '/'
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    const handleAdd = () => {
        const { user, amount, expense, category, date } = state
        validateInputs(user, amount, expense, category) ? addExpense(user, amount, expense, category, date) : setOpen(true)
    }


    return (
        <div id="add-expense">
            <h1>הוספת הוצאה</h1>
            <div id="add-expense-form">
                <input
                    type="text"
                    dir="rtl"
                    placeholder="משתמש"
                    name="user"
                    value={state.user}
                    onChange={handleInputs}
                />
                <input
                    name="amount"
                    type="number"
                    dir="rtl"
                    placeholder="סכום"
                    value={state.amount}
                    onChange={handleInputs}
                    ref={amountInput}
                />
                <input
                    dir="rtl"
                    placeholder="הוצאה"
                    name="expense"
                    type="text"
                    value={state.expense}
                    onChange={handleInputs}
                />
                <select name="category" dir="rtl" onChange={handleInputs}>
                    <option selected disabled>תבחר קטגוריה</option>
                    {props.currentAccount.categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
                </select>
                <DateSelector changeDate={changeDate} date={state.date} />
                <div id="add-expense-button" onClick={handleAdd}>הוסף</div>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
            >
                <SnackbarContentWrapper
                    onClose={handleClose}
                    variant="error"
                    message="מלא את כל השדות והוסף שוב"
                />
            </Snackbar>
        </div>
    )
}

export default AddExpense