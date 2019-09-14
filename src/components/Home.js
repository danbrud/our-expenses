import React from 'react'
import ExpenseTableHeader from './ExpenseTableHeader';
import Expenses from './Expenses';
import FabButton from './FabButton'
import MonthSelector from './MonthSelector';
import '../styles/Expense.css'

export default function Home() {
    return (
        <div id='home-container'>
            <MonthSelector />
            <ExpenseTableHeader />
            <Expenses />
            <FabButton />
        </div>
    )
}
