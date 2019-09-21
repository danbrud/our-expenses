import { observable, action } from "mobx";
import axios from 'axios'
const API_URL = 'http://localhost:4000'


export class Expenses {
    @observable expenses = []
    @observable currentMonth = new Date().getMonth()
    @observable showErrorMessage = false
    // @observable showExpensePopup = false
    // @observable expenseForPopup = {}

    @action setExpenses(expenses) {
        this.expenses = expenses
    }

    getExpenses = async (shouldGetByMonth = true) => {
        const optionalMonthParam = shouldGetByMonth ? `?month=${this.currentMonth}` : ''

        const res = await axios.get(`${API_URL}/expenses${optionalMonthParam}`)
        this.setExpenses(res.data)
    }

    validateInputs = (user, amount, expense, category) => user && amount && expense && category ? true : false

    @action setShowErrorMessage = () => {
        this.showErrorMessage = true

        setTimeout(() => {
           this.showErrorMessage = false 
        }, 2000)
    }

    async addExpense(user, amount, expense, category) {
        if(!this.validateInputs(user, amount, expense, category)) {return this.setShowErrorMessage()}

        const newExpense = { user, expense, amount, category, date: new Date() }
        const res = await axios.post(`${API_URL}/expense`, newExpense)
        
        const expenses = [...this.expenses, res.data]
        this.setExpenses(expenses)
        
        window.location = '/'
    }

    @action changeCurrentMonth = (e) => {
        this.currentMonth = e.target.value
        this.getExpenses()
    }

    // @action togglePopup = () => this.showExpensePopup = !this.showExpensePopup

    // @action updateExpenseForPopup = expense => this.expenseForPopup = expense
}