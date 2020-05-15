class Expenses {
  constructor() {
    this.expenses = []
  }


  async getExpenses(shouldGetByDate = true) {
    const optionalParam = shouldGetByDate ? `?date=${currentDate}` : ''
    const res = await axios.get(`${API_URL}/api/expenses/${currentAccount._id}${optionalParam}`)
    this.expenses = res.data
}