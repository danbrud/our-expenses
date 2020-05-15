import React from 'react'

function TableHeader(props) {
    const { type } = props

    return (
        type === 'הכנסה' || type === 'הוצאה'
            ? <div className="table" id="table-header">
                <div>סכום</div>
                <div>{type}</div>
                <div>משתמש</div>
            </div>
            : <div className="category-table" id="table-header">
                <div>סכום</div>
                <div>קטגוריה</div>
            </div>
    )
}

export default TableHeader