import React from 'react'
import moment from 'moment'
import { inject, observer } from 'mobx-react'

const ExpensePopup = inject('expensesStore')(observer(function (props) {

    return (
        <div id="expense-popup">
            <div>{moment(props.expensesStore.expenseForPopup.date).format("l")}</div>
            <div>{props.expensesStore.expenseForPopup.category}</div>
            <div>{props.expensesStore.expenseForPopup.amount}</div>
            <div>{props.expensesStore.expenseForPopup.expense}</div>
            <div>{props.expensesStore.expenseForPopup.user}</div>
        </div>
    )
}))

export default ExpensePopup