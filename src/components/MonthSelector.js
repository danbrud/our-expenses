import React from 'react'
import { observer, inject } from 'mobx-react';
import { months } from '../utils'
import '../styles/Expense.css'

const MonthSelector = inject('expensesStore')(observer(function (props) {

    return (
        <select 
            id='month-selector'
            dir='rtl'
            value={props.expensesStore.currentMonth}
            onChange={props.expensesStore.changeCurrentMonth}
        >
            {months.map((m, i) => <option key={i} value={i}>{m}</option>)}
        </select>
    )
}))

export default MonthSelector