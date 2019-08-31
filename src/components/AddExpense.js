import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { expenseCategories } from '../utils';


@inject('generalStore')
@observer
class AddExpense extends Component {

    render() {
        const generalStore = this.props.generalStore

        return (
            <div id="add-expense-form">
                <input
                    type="text"
                    name="user"
                    placeholder="Name"
                    value={generalStore.user}
                    onChange={generalStore.handleInputs} />
                <input
                    type="number"
                    name="amount"
                    placeholder="Add expense"
                    value={generalStore.amount}
                    onChange={generalStore.handleInputs} />
                <input
                    type="text"
                    name="name"
                    placeholder="What did you buy?"
                    value={generalStore.name}
                    onChange={generalStore.handleInputs} />
                <select name="category" value={generalStore.category} onChange={generalStore.handleInputs}>
                    {expenseCategories.map(c => <option>{c}</option>)}
                </select>
                <div class="btn">ADD</div>
            </div>
        )
    }
}

export default AddExpense