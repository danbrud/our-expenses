import React from 'react'
import { months } from '../utils'
import '../styles/Expense.css'

function MonthSelector(props) {

    return (
        <select
            id='month-selector'
            dir='rtl'
            value={props.currentMonth}
            onChange={(e) => props.changeCurrentMonth(e.target.value)}
        >
            {months.map((m, i) => <option key={i} value={i}>{m}</option>)}
        </select>
    )
}

export default MonthSelector