import { createContext, useContext } from 'react'
import { API_URL } from '../utils/utils'
import axios from 'axios'

class IncomeData {
  constructor() {
    this.income = []
  }

  async getIncome(currentAccount, currentDate, shouldGetByDate = true) {
    const optionalParam = shouldGetByDate ? `?date=${currentDate}` : ''
    const res = await axios.get(`${API_URL}/api/income/${currentAccount._id}${optionalParam}`)
    this.income = res.data
  }
}

export const incomeData = new IncomeData()

const IncomeContext = createContext({})

export const IncomeProvider = IncomeContext.Provider

export const IncomeConsumer = IncomeContext.Consumer

export const useIncomeContext = () => useContext(IncomeContext)