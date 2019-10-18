import React from 'react'
import '../styles/Expense.css'
import moment from 'moment'
import {inject, observer} from 'mobx-react'

const Category = inject('expensesStore')(observer(function (props) {

    // const showPopup = () => {
    //     props.expensesStore.updateExpenseForPopup(props.expense)
    //     props.expensesStore.togglePopup()
    // }

    return (
        <div className="expense-table expense-item" style={{backgroundColor: props.color}}>
            {/* <div>{moment(props.expense.date).format("l")}</div> */}
            <div>{props.category.name}</div>
            <div>{props.category.value}</div>
        </div>
    )
}))

export default Category