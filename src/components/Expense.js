import React from 'react'
import '../styles/Expense.css'
import moment from 'moment'

export default function Expense(props) {

    return (
        <div className="expense-table expense-item">
            <div>{props.expense.user}</div>
            <div>{props.expense.expense}</div>
            <div>{props.expense.amount}</div>
            <div>{props.expense.category}</div>
            <div>{moment(props.expense.date).format("l")}</div>
        </div>
    )
}

