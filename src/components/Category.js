import React from 'react'
import '../styles/Expense.css'

function Category({ category, color }) {

    return (
        <div className="category-table expense-item" style={{backgroundColor: color}}>
            <div>₪ {new Intl.NumberFormat('en-US').format(category.amount)}</div>
            <div>{category.name}</div>
        </div>
    )
}

export default Category