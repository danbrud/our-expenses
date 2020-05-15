import React, { useEffect, useState } from 'react'
import TableHeader from '../general/TableHeader';
import FabButton from '../FabButton'
import MonthSelector from '../general/MonthSelector';
import DataPanels from './DataPanels';
import Loader from '../Loader';
import '../../styles/Expense.css'
import NoData from '../general/NoData';
import '../../styles/Income.css'
import { CONSTS } from '../../utils/consts';
import { useIncomeContext, IncomeConsumer } from '../../context/Income';



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
            <TableHeader type={CONSTS.singularIncome} />
            {
                incomeData.income.length
                    ? <IncomeConsumer>
                        {(incomeData) => (
                            <DataPanels data={incomeData.income} deleteItem={incomeData.deleteIncome} type={CONSTS.pluralIncome} />
                        )}
                    </IncomeConsumer>
                    : isLoading
                        ? <Loader />
                        : <NoData type={CONSTS.pluralIncome} />
            }
            <FabButton />
        </div>
    )
}

export default Income