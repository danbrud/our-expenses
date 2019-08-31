import { observable, action, computed } from "mobx";
import axios from 'axios'


export class Expenses {
    @observable expenses = [
        {_id: "7897987", user: "Danny", amount: 20, date: new Date(), category: "Apt"},
        {_id: "jhksd", user: "Danny", amount: 67, date: new Date(), category: "Apt"},
        {_id: "l2j1", user: "Tal", amount: 90, date: new Date(), category: "Food"},
        {_id: "lk;l2k312", user: "Tal", amount: 10, date: new Date(), category: "Groceries"},
        {_id: "798hkjhkdsdsa", user: "Tal", amount: 210, date: new Date(), category: "Groceries"},
        {_id: "787wdjshdashdsa76", user: "Danny", amount: 10, date: new Date(), category: "Eating out"}
    ]

    @action setExpenses(expenses) {
        this.expenses = expenses
    }

    async getExpenses() {
        const res = await axios.get(`http://localhost:8080/expenses`)
        this.setExpenses(res.data)
    }

    async addExpenses(user, amount, category) {
        const newExpense = { user, amount, category, date: new Date() }
        const res = await axios.post(`http://localhost:8080/expense`)
        
        const expenses = [...this.expenses, res.data]
        this.setExpenses(expenses)
    }
}