import React from 'react'
import ExpenseTableHeader from './ExpenseTableHeader';
import FabButton from './FabButton'
import MonthSelector from './MonthSelector';
import '../styles/Expense.css'
import ExpensePopup from './ExpensePopup'
import {inject, observer} from 'mobx-react'
import ExpensePanels from './ExpensePanels';
import Loader from './Loader';

const Home = inject('expensesStore')(observer(function (props) {
    return (
        <div id='home-container'>
            <MonthSelector />
            <ExpenseTableHeader />
            {
                props.expensesStore.expenses.length 
                ? <ExpensePanels expenses={props.expensesStore.expenses} getExpenses={props.expensesStore.getExpenses}/> 
                : <Loader />
            }
            {props.expensesStore.showExpensePopup ? <ExpensePopup /> : null}
            <FabButton />
        </div>
    )
}))

export default Home