import React from 'react'
import TableHeader from './general/TableHeader';
import FabButton from './FabButton'
import MonthSelector from './general/MonthSelector';
import ExpensePanels from './ExpensePanels';
import Loader from './Loader';
import '../styles/Expense.css'
import NoData from './general/NoData';
import { CONSTS } from '../utils/consts';



function Home(props) {

    return (
        <div id='home-container'>
            <MonthSelector currentDate={props.currentDate} changeCurrentDate={props.changeCurrentDate} />
            <TableHeader type={CONSTS.singularExpense} />
            {
                props.expenses.length
                    ? <ExpensePanels expenses={props.expenses} setExpenses={props.setExpenses} />
                    : props.isLoading
                        ? <Loader />
                        : <NoData type={CONSTS.pluralExpense} />
            }
            <FabButton />
        </div>
    )
}

export default Home