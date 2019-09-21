import React from 'react'
import ExpenseTableHeader from './ExpenseTableHeader';
// import Expenses from './Expenses';
import FabButton from './FabButton'
import MonthSelector from './MonthSelector';
import '../styles/Expense.css'
import ExpensePopup from './ExpensePopup'
import {inject, observer} from 'mobx-react'
import ExpensePanels from './ExpensePanels';

const Home = inject('expensesStore')(observer(function (props) {
    return (
        <div id='home-container'>
            <MonthSelector />
            <ExpenseTableHeader />
            {/* <Expenses /> */}
            <ExpensePanels expenses={props.expensesStore.expenses} getExpenses={props.expensesStore.getExpenses}/>
            {/* {put total here} */}
            {props.expensesStore.showExpensePopup ? <ExpensePopup /> : null}
            <FabButton />
        </div>
    )
}))

export default Home