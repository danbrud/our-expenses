import React from 'react'
import ExpenseTableHeader from './ExpenseTableHeader';
import FabButton from './FabButton'
import MonthSelector from './MonthSelector';
import ExpensePanels from './ExpensePanels';
import Loader from './Loader';
import '../styles/Expense.css'



function Home(props) {

    return (
        <div id='home-container'>
            <MonthSelector currentMonth={props.currentMonth} changeCurrentMonth={props.changeCurrentMonth} />
            <ExpenseTableHeader />
            {props.expenses.length ? <ExpensePanels expenses={props.expenses} /> : <Loader />}
            <FabButton />
        </div>
    )
}

export default Home