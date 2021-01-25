import React, { useEffect, useState } from 'react'
import TableHeader from '../general/TableHeader';
import FabButton from '../FabButton'
import MonthSelector from '../general/MonthSelector';
import ExpensePanels from './DataPanels';
import Loader from '../Loader';
import '../../styles/Expense.css'
import { useDispatch, useSelector } from 'react-redux'
import NoData from '../general/NoData';
import '../../styles/Income.css'
import { CONSTS } from '../../utils/consts';
import { fetchIncomes, selectAllIncomes } from '../../state/slices/incomesSlice';
import { selectCurrentAccount } from '../../state/slices/accountSlice';
import { selectCurrentDate } from '../../state/slices/uiSlice';



function Income() {
    const dispatch = useDispatch()

    const currentAccount = useSelector(selectCurrentAccount)
    const income = useSelector(selectAllIncomes)
    const currentDate = useSelector(selectCurrentDate)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getIncome = async (shouldGetByDate = true) => {
            const optionalParam = shouldGetByDate ? `?date=${currentDate}` : ''
            dispatch(fetchIncomes(optionalParam))

            setIsLoading(false)
        }

        if (currentAccount._id) {
            getIncome()
        }
    }, [currentDate, currentAccount, dispatch])

    return (
        <div id='income-container'>
            <MonthSelector />
            <TableHeader type={CONSTS.singularIncome} />
            {
                income.length
                    ? <ExpensePanels data={income} type={CONSTS.pluralIncome} />
                    : isLoading
                        ? <Loader />
                        : <NoData type={CONSTS.pluralIncome} />
            }
            <FabButton />
        </div>
    )
}

export default Income