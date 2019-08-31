import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import Expense from './Expense';

@inject('expensesStore')
@observer
class Expenses extends Component {

    render() {
        const expenses = this.props.expensesStore.expenses
        return(
            <div>
                {expenses.map(e => <Expense key={e._id} expense={e}/>)}       
            </div>
        )
    }
}

export default Expenses