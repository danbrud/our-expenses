import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import Expense from './Expense';

@inject('expensesStore')
@observer
class Expenses extends Component {

    componentDidMount = () => this.props.expensesStore.getExpenses()

    render() {
        const expenses = this.props.expensesStore.expenses
        return(
            <div>
                {expenses.length ? expenses.map(e => <Expense key={e._id} expense={e}/>)}       
            </div>
        )
    }
}

export default Expenses