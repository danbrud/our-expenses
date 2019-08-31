import React from 'react'
import ExpenseTableHeader from './ExpenseTableHeader';
import Expenses from './Expenses';
import FabButton from './FabButton'

export default function Home() {
    return (
        <div>
            <ExpenseTableHeader />
            <Expenses />
            <FabButton />
        </div>
    )
}
