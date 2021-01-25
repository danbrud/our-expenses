import React from 'react'
import MonthSelector from '../general/MonthSelector'
import FabButton from '../FabButton'
import Loader from '../Loader'
import Categories from './Categories'
import './../../styles/Reports.css'
import TableHeader from '../general/TableHeader'
import NoData from '../general/NoData'
import { CONSTS } from '../../utils/consts'
import { useSelector } from 'react-redux'
import { selectAllExpenses } from '../../state/slices/expensesSlice'


function Reports({ isLoading }) {
    const expenses = useSelector(selectAllExpenses)

    return (
        <div id="reports-container">
            <MonthSelector />
            <TableHeader />
            {
                expenses.length
                    ? <Categories />
                    : isLoading
                        ? <Loader />
                        : <NoData type={CONSTS.pluralExpense} />
            }
            <FabButton />
        </div>
    )
}

export default Reports