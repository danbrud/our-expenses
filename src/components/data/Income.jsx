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



function Income(props) {
    const { currentAccount, currentDate } = props
    const [income, setIncome] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getIncome = async (shouldGetByDate = true) => {
            const optionalParam = shouldGetByDate ? `?date=${currentDate}` : ''

            const res = await axios.get(`${API_URL}/api/income/${currentAccount._id}${optionalParam}`)
            setIncome(res.data)
            setIsLoading(false)
        }

        getIncome()
    }, [currentDate, currentAccount])

    return (
        <div id='income-container'>
            <MonthSelector currentDate={props.currentDate} changeCurrentDate={props.changeCurrentDate} />
            <TableHeader type={CONSTS.singularIncome}/>
            {
                income.length
                    ? <ExpensePanels data={income} setData={setIncome} type={CONSTS.pluralIncome} />
                    : isLoading
                        ? <Loader />
                        : <NoData type={CONSTS.pluralIncome} />
            }
            <FabButton />
        </div>
    )
}

export default Income