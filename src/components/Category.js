import React from 'react'
import '../styles/Expense.css'

function Category(props) {

    return (
        <div className="category-table expense-item" style={{backgroundColor: props.color}}>
            <div>₪ {props.category.amount}</div>
            <div>{props.category.name}</div>
        </div>
    )
}

export default Category