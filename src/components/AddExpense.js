import React from 'react'
import DateSelector from './DateSelector';
import axios from 'axios'
import { expenseCategories, API_URL } from '../utils';
import '../styles/AddExpense.css'

function AddExpense(props) {
    const [state, setState] = React.useState({ user: '', amount: '', expense: '', category: '', date: new Date() })
    const [showErrorMessage, setShowErrorMessage] = React.useState(false)

    const handleInputs = e => setState({ ...state, [e.target.name]: e.target.value })
    const changeDate = date => setState({ ...state, date })

    const validateInputs = (user, amount, expense, category) => user && amount && expense && category ? true : false

    const addExpense = async (user, amount, expense, category, date) => {
        const newExpense = { user, expense, amount, category, date }
        const res = await axios.post(`${API_URL}/api/expense`, newExpense)
        props.setExpenses([...props.expenses, res.data])

        window.location = '/'
    }

    const toggleErrorMessage = () => {
        setShowErrorMessage(true)
        setTimeout(() => {
            setShowErrorMessage(false)
        }, 2000)
    }

    const handleAdd = () => {
        const { user, amount, expense, category, date } = state
        validateInputs(user, amount, expense, category) ? addExpense(user, amount, expense, category, date) : toggleErrorMessage()
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
                    {expenseCategories.map((c, i) => <option key={i} value={c}>{c}</option>)}
                </select>
                <DateSelector changeDate={changeDate} date={state.date} />
                <div id="add-expense-button" onClick={handleAdd}>הוסף</div>
                {showErrorMessage ? <div id="error-message">מלא את כל השדות והוסף שוב</div> : null}
            </div>
        </div>
    )
}

export default AddExpense