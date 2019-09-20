import React from 'react'
import '../styles/Expense.css'
import moment from 'moment'
import {inject, observer} from 'mobx-react'

const Expense = inject('expensesStore')(observer(function (props) {

    const showPopup = () => {
        props.expensesStore.updateExpenseForPopup(props.expense)
        props.expensesStore.togglePopup()
    }

    return (
        <div className="expense-table expense-item" onClick={showPopup}>
            {/* <div>{moment(props.expense.date).format("l")}</div> */}
            <div>{props.expense.category}</div>
            <div>{props.expense.amount}</div>
            <div>{props.expense.expense}</div>
            <div>{props.expense.user}</div>
        </div>
    )
}))

export default Expense