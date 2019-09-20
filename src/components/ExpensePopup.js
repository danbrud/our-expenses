import React from 'react'
import {inject, observer} from 'mobx-react'

const ExpensePopup = inject('expensesStore')(observer(function (props) {

    return (
            <div>
                Show popup
            </div>
    )
}))

export default ExpensePopup