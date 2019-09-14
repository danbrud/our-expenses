import React from 'react'
import { observer, inject } from 'mobx-react';
import '../styles/Expense.css'

const MonthSelector = inject('expensesStore')(observer(function (props) {
    
    const months = [
        'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
    ]

    return (
        <select 
            id='month-selector'
            value={props.expensesStore.currentMonth}
            onChange={props.expensesStore.changeCurrentMonth}
        >
            {months.map((m, i) => <option key={i} value={i}>{m}</option>)}
        </select>
    )
}))

export default MonthSelector