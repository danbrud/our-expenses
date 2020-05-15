import React from 'react'
import TableHeader from './general/TableHeader';
import FabButton from './FabButton'
import MonthSelector from './MonthSelector';
import ExpensePanels from './ExpensePanels';
import Loader from './Loader';
import '../styles/Expense.css'
import NoData from './general/NoData';



function Home(props) {

    return (
        <div id='home-container'>
            <MonthSelector currentDate={props.currentDate} changeCurrentDate={props.changeCurrentDate} />
            <TableHeader type='הוצאה' />
            {
                props.expenses.length
                    ? <ExpensePanels expenses={props.expenses} setExpenses={props.setExpenses} />
                    : props.isLoading
                        ? <Loader />
                        : <NoData type='הוצאות' />
            }
            <FabButton />
        </div>
    )
}

export default Home