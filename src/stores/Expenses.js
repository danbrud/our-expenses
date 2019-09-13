import { observable, action, computed } from "mobx";
import axios from 'axios'


export class Expenses {
    @observable expenses = []

    @action setExpenses(expenses) {
        this.expenses = expenses
    }

    async getExpenses() {
        const res = await axios.get(`http://localhost:4000/expenses`)
        this.setExpenses(res.data)
    }

    async addExpense(user, amount, expense, category) {
        const newExpense = { user, expense, amount, category, date: new Date() }
        const res = await axios.post(`http://localhost:4000/expense`, newExpense)
        
        const expenses = [...this.expenses, res.data]
        this.setExpenses(expenses)
    }
}