import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { expenseCategories } from '../utils';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import '../styles/AddExpense.css'


@inject('generalStore', 'expensesStore')
@observer
class AddExpense extends Component {

    addExpense = () => {
        const gs = this.props.generalStore
        this.props.expensesStore.addExpense(gs.user, gs.amount, gs.name, gs.category)
    }

    render() {
        const generalStore = this.props.generalStore

        return (
            <div id="add-expense-form">
                <TextField
                    label="User"
                    name="user"
                    type="text"
                    value={generalStore.user}
                    onChange={generalStore.handleInputs}
                    margin="normal"
                />
                <TextField
                    label="Amount"
                    name="amount"
                    type="number"
                    value={generalStore.amount}
                    onChange={generalStore.handleInputs}
                    margin="normal"
                />
                <TextField
                    label="Name"
                    name="name"
                    type="text"
                    value={generalStore.name}
                    onChange={generalStore.handleInputs}
                    margin="normal"
                />
                <InputLabel htmlFor="category">Age</InputLabel>
                <Select
                    value={generalStore.category}
                    onChange={generalStore.handleInputs}
                    inputProps={{
                        name: 'category',
                        id: 'category'
                    }}
                >
                    {expenseCategories.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                </Select>
                <Button 
                    onClick={this.addExpense} 
                    disableRipple={true} 
                    variant="contained" 
                    color="primary"
                    href="/"
                >
                    ADD
                </Button>
            </div>
        )
    }
}

export default AddExpense