import React, { useEffect, useState } from 'react'
import TableHeader from './general/TableHeader';
import FabButton from './FabButton'
import MonthSelector from './MonthSelector';
import ExpensePanels from './ExpensePanels';
import Loader from './Loader';
import '../styles/Expense.css'
import axios from 'axios'
import { API_URL } from '../utils/utils';
import NoData from './general/NoData';



function Income(props) {
    const { currentAccount, currentDate, setIsLoading, isLoading } = props
    const [income, setIncome] = useState([])

    useEffect(() => {
        const getIncome = async (shouldGetByDate = true) => {
            const optionalParam = shouldGetByDate ? `?date=${currentDate}` : ''

            const res = await axios.get(`${API_URL}/api/income/${currentAccount._id}${optionalParam}`)
            setIncome(res.data)
            setIsLoading(false)
        }

        getIncome()
    }, [])

    return (
        <div id='income-container'>
            <MonthSelector currentDate={props.currentDate} changeCurrentDate={props.changeCurrentDate} />
            <TableHeader type='הכנסה'/>
            {
                income.length
                    ? <ExpensePanels expenses={income} setExpenses={setIncome} />
                    : isLoading
                        ? <Loader />
                        : <NoData type='הכנסות' />
            }
            <FabButton />
        </div>
    )
}

export default Income