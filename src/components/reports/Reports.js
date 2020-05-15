import React from 'react'
import MonthSelector from '../general/MonthSelector'
import FabButton from '../FabButton'
import Loader from '../Loader'
import Categories from './Categories'
import './../../styles/Reports.css'
import TableHeader from '../general/TableHeader'
import NoData from '../general/NoData'
import { CONSTS } from '../../utils/consts'


function Reports(props) {
    const { currentDate, changeCurrentDate, expenses, setExpenses } = props

    return (
        <div id="reports-container">
            <MonthSelector currentDate={currentDate} changeCurrentDate={changeCurrentDate} />
            <TableHeader />
            {
                expenses.length
                    ? <Categories expenses={expenses} setExpenses={setExpenses} />
                    : props.isLoading
                        ? < Loader />
                        : <NoData type={CONSTS.pluralExpense} />
            }
            <FabButton />
        </div>
    )
}

export default Reports