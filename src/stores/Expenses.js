import { observable, action, computed } from "mobx";
import axios from 'axios'
const API_URL = 'http://localhost:4000'


export class Expenses {
    @observable expenses = []
    @observable currentMonth = new Date().getMonth()

    @action setExpenses(expenses) {
        this.expenses = expenses
    }

    async getExpenses(shouldGetByMonth = true) {
        const optionalMonthParam = shouldGetByMonth ? `?month=${this.currentMonth}` : ''

        const res = await axios.get(`${API_URL}/expenses${optionalMonthParam}`)
        this.setExpenses(res.data)
    }

    async addExpense(user, amount, expense, category) {
        const newExpense = { user, expense, amount, category, date: new Date() }
        const res = await axios.post(`${API_URL}/expense`, newExpense)
        
        const expenses = [...this.expenses, res.data]
        this.setExpenses(expenses)
    }

    @action changeCurrentMonth = (e) => {
        this.currentMonth = e.target.value
        this.getExpenses()
    }
}