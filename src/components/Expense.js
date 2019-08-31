import React from 'react'
import '../styles/Expense.css'

export default function Expense(props) {

    return (
        <div id="expense">
            <div>{props.expense.user}</div>
            <div>{props.expense.name}</div>
            <div>{props.expense.amount}</div>
            <div>{props.expense.category}</div>
            <div>{props.expense.date.toString()}</div>
        </div>
    )
}

