import React, { useEffect, useState } from 'react'
import TableHeader from '../general/TableHeader';
import FabButton from '../FabButton'
import MonthSelector from '../general/MonthSelector';
import ExpensePanels from './DataPanels';
import Loader from '../Loader';
import '../../styles/Expense.css'
import axios from 'axios'
import { API_URL } from '../../utils/utils';
import NoData from '../general/NoData';
import '../../styles/Income.css'
import { CONSTS } from '../../utils/consts';
import { useIncomeContext } from '../../context/Income';



function Income(props) {
    const { currentAccount, currentDate, changeCurrentDate } = props
    const [isLoading, setIsLoading] = useState(true)

    const incomeData = useIncomeContext()

    useEffect(() => {
        incomeData.getIncome(currentAccount, currentDate)
            .then(() => setIsLoading(false))
    }, [currentDate, currentAccount])

    return (
        <div id='income-container'>
            <MonthSelector currentDate={currentDate} changeCurrentDate={changeCurrentDate} />
            <TableHeader type={CONSTS.singularIncome}/>
            {
                incomeData.income.length
                    ? <ExpensePanels data={incomeData.income} type={CONSTS.pluralIncome} />
                    : isLoading
                        ? <Loader />
                        : <NoData type={CONSTS.pluralIncome} />
            }
            <FabButton />
        </div>
    )
}

export default Income