import React from 'react'
import ExpenseTableHeader from './ExpenseTableHeader';
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
            <ExpensePanels expenses={props.expensesStore.expenses} getExpenses={props.expensesStore.getExpenses}/>
            {props.expensesStore.showExpensePopup ? <ExpensePopup /> : null}
            <FabButton />
        </div>
    )
}))

export default Home