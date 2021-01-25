import React, { createRef, useEffect, useState } from 'react'
import DateSelector from './DateSelector';
import axios from 'axios'
import { API_URL } from '../utils/utils';
import '../styles/AddExpense.css'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapper from './SnackbarContentWrapper'
import Loader from './Loader';
import { CONSTS } from '../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { saveExpense } from '../state/slices/expensesSlice'
import { useHistory } from 'react-router-dom';
import { saveIncome } from '../state/slices/incomesSlice';
import { selectCurrentAccount } from '../state/slices/accountSlice';
import Login from './Login';

function AddExpense({ currentUser }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const currentAccount = useSelector(selectCurrentAccount)

    const [state, setState] = useState({
        user: currentUser, amount: '', expense: '',
        category: '', date: new Date(), type: CONSTS.singularExpense
    })
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const amountInput = createRef()

    useEffect(() => {
        if (amountInput.focus) {
            amountInput.current.focus()
        }
    }, [])

    const handleInputs = e => setState({ ...state, [e.target.name]: e.target.value })
    const changeDate = date => setState({ ...state, date })

    const validateInputs = (user, amount, expense, category, type) => {
        return type === CONSTS.singularExpense ? user && amount && expense && category : user && amount && expense
    }

    const onAddExpenseClick = async (user, amount, expense, category, date, type) => {
        setIsLoading(true)

        if (type === CONSTS.singularExpense) {
            const newExpense = { user, expense, amount: Number(amount), category, date, accountId: currentAccount._id }
            dispatch(saveExpense(newExpense))
        } else {
            const newIncome = { user, name: expense, amount: Number(amount), date, accountId: currentAccount._id }
            dispatch(saveIncome(newIncome))
        }

        history.push(type === CONSTS.singularExpense ? '/' : '/income')
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
            ? onAddExpenseClick(user, amount, expense, category, date, type)
            : setOpen(true)
    }

    const isLoggedIn = () => currentUser ? true : false

    if (!currentAccount._id) { return <Loader /> }

    if (!currentAccount.categories.length) { return <h1>הגדר קטגוריות להוצאות בעמוד ההגדרות</h1> }

    return (
        isLoggedIn() && currentAccount.users.includes(localStorage.userName)
            ? (
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
                                    {currentAccount.categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
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
            : Login
    )
}

export default AddExpense