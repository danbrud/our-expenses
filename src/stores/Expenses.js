import { observable, action, computed } from "mobx";
import axios from 'axios'


export class Expenses {
    @observable expenses = [
        {_id: "7897987", user: "Danny", name: "Bagels", amount: 20, date: new Date(), category: "Apt"},
        {_id: "jhksd", user: "Danny", name: "Cofee", amount: 67, date: new Date(), category: "Apt"},
        {_id: "l2j1", user: "Tal", amount: 90, name: "Cofee", date: new Date(), category: "Food"},
        {_id: "lk;l2k312", user: "Tal", amount: 10, name: "Cofee", date: new Date(), category: "Groceries"},
        {_id: "798hkjhkdsdsa", user: "Tal", amount: 210, name: "Cofee", date: new Date(), category: "Groceries"},
        {_id: "787wdjshdashdsa76", user: "Danny", amount: 10, name: "Cofee", date: new Date(), category: "Eating out"}
    ]

    @action setExpenses(expenses) {
        this.expenses = expenses
    }

    async getExpenses() {
        const res = await axios.get(`http://localhost:8080/expenses`)
        this.setExpenses(res.data)
    }

    async addExpense(user, amount, name, category) {
        const newExpense = { user, amount, name, category, date: new Date() }
        return console.log(newExpense)
        const res = await axios.post(`http://localhost:8080/expense`, newExpense)
        
        const expenses = [...this.expenses, res.data]
        this.setExpenses(expenses)
    }
}