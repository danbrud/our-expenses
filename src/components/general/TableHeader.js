import React from 'react'
import { CONSTS } from '../../utils/consts'

function TableHeader({ type }) {

    return (
        type === CONSTS.singularIncome || type === CONSTS.singularExpense
            ? <div className='table' id='table-header'>
                <div>סכום</div>
                <div>{type}</div>
                <div>משתמש</div>
            </div>
            : <div className='category-table' id='table-header'>
                <div>סכום</div>
                <div>קטגוריה</div>
            </div>
    )
}

export default TableHeader