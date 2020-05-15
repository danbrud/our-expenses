import React from 'react'

function ExpenseTableHeader(props) {
    const { type } = props

    return (
        <div className="expense-table" id="expense-table-header">
            <div>סכום</div>
            <div>{type}</div>
            <div>משתמש</div>
        </div>
    )
}

export default ExpenseTableHeader