import React from 'react'
import ExpenseTableHeader from './ExpenseTableHeader';
import Expenses from './Expenses';

export default function Home() {
    return (
        <div>
            <ExpenseTableHeader />
            <Expenses />
        </div>
    )
}
