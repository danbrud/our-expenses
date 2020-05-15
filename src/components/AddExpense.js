import React, { useEffect } from 'react'
import DateSelector from './DateSelector';
import axios from 'axios'
import { API_URL } from '../utils/utils';
import '../styles/AddExpense.css'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapper from './SnackbarContentWrapper'
import Loader from './Loader';
import { CONSTS } from '../utils/consts';

function AddExpense(props) {
    const [state, setState] = React.useState({
        user: props.currentUser, amount: '', expense: '',
        category: '', date: new Date(), type: CONSTS.singularExpense
    })
    const [open, setOpen] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const amountInput = React.createRef()

    useEffect(() => {
        if (amountInput.focus) {
            amountInput.current.focus()
        }
    }, [])

    const handleInputs = e => setState({ ...state, [e.target.name]: e.target.value })
    const changeDate = date => setState({ ...state, date })

    const validateInputs = (user, amount, expense, category, type) => {
        if (type === CONSTS.singularExpense) {
            return user && amount && expense && category
        } else {
            return user && amount && expense
        }
    }

    const addExpense = async (user, amount, expense, category, date, type) => {
        setIsLoading(true)

        if (type === CONSTS.singularExpense) {
            const newExpense = { user, expense, amount, category, date, accountId: props.currentAccount._id }
            const res = await axios.post(`${API_URL}/api/expense`, newExpense)
            props.setExpenses([...props.currentAccount.expenses, res.data._id])
        } else {
            const newIncome = { user, name: expense, amount, date, accountId: props.currentAccount._id }
            const res = await axios.post(`${API_URL}/api/income`, newIncome)
        }

        window.location = '/'
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    const handleAdd = () => {
        const { user, amount, expense, category, date, type } = state
        validateInputs(user, amount, expense, category, type)
            ? addExpense(user, amount, expense, category, date, type)
            : setOpen(true)
    }

    if (!props.currentAccount.categories.length) { return <h1>הגדר קטגוריות להוצאות בעמוד ההגדרות</h1> }

    if (isLoading) { return <Loader /> }

    return (
        <div id="add-expense">
            <h1>הוספת {state.type}</h1>
            <div id="add-expense-form">
                <select name="type" dir="rtl" onChange={handleInputs}>
                    <option disabled>סוג</option>
                    {[CONSTS.singularExpense, CONSTS.singularIncome].map((t, i) => <option key={i} value={t}>{t}</option>)}
                </select>
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
                    placeholder={`שם ${state.type}`}
                    name="expense"
                    type="text"
                    value={state.expense}
                    onChange={handleInputs}
                />
                {
                    state.type === CONSTS.singularExpense
                        ? <select name="category" dir="rtl" onChange={handleInputs}>
                            <option selected disabled>תבחר קטגוריה</option>
                            {props.currentAccount.categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
                        </select>
                        : null
                }
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