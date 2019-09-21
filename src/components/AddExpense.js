import React from 'react'
import { observer, inject } from 'mobx-react';
import { expenseCategories } from '../utils';
import '../styles/AddExpense.css'
import DateSelector from './DateSelector';

const AddExpense = inject('generalStore', 'expensesStore')(observer(function (props) {

    const generalStore = props.generalStore

    const addExpense = () => {
        props.expensesStore.addExpense(generalStore.user, generalStore.amount, generalStore.expense, generalStore.category, generalStore.date)
    }

    const changeDate = date => {
        generalStore.handleDateChange(date)
    }

    return (
        <div>
            <h1>הוספת הוצאה</h1>
            <div id="add-expense-form">
                <input
                    type="text"
                    dir="rtl"
                    placeholder="משתמש"
                    name="user"
                    value={generalStore.user}
                    onChange={generalStore.handleInputs}
                />
                <input
                    name="amount"
                    type="number"
                    dir="rtl"
                    placeholder="סכום"
                    value={generalStore.amount}
                    onChange={generalStore.handleInputs}
                />
                <input
                    dir="rtl"
                    placeholder="הוצאה"
                    name="expense"
                    type="text"
                    value={generalStore.expense}
                    onChange={generalStore.handleInputs}
                />
                <select name="category" dir="rtl" onChange={generalStore.handleInputs}>
                    <option selected disabled>תבחר קטגוריה</option>
                    {expenseCategories.map((c, i) => <option key={i} value={c}>{c}</option>)}
                </select>
                <DateSelector changeDate={changeDate} date={generalStore.date}/>
                <div id="add-expense-button" onClick={addExpense}>הוסף</div>
                {props.expensesStore.showErrorMessage ? <div id="error-message">מלא את כל השדות והוסף שוב</div> : null}
            </div>
        </div>
    )
}))

export default AddExpense