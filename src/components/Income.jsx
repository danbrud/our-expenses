import React from 'react'
import ExpenseTableHeader from './ExpenseTableHeader';
import FabButton from './FabButton'
import MonthSelector from './MonthSelector';
import ExpensePanels from './ExpensePanels';
import Loader from './Loader';
import '../styles/Expense.css'



function Income(props) {

    return (
        <div id='income-container'>
            <MonthSelector currentDate={props.currentDate} changeCurrentDate={props.changeCurrentDate} />
            <ExpenseTableHeader type='הכנסה'/>
            {
                props.expenses.length
                    ? <ExpensePanels expenses={props.expenses} setExpenses={props.setExpenses} />
                    : props.isLoading
                        ? <Loader />
                        : <div className="no-expense-msg">אין הוצאות לחודש זה</div>
            }
            <FabButton />
        </div>
    )
}

export default Income