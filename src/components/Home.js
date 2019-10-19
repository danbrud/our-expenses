import React, { useEffect } from 'react'
import ExpenseTableHeader from './ExpenseTableHeader';
import FabButton from './FabButton'
import MonthSelector from './MonthSelector';
import '../styles/Expense.css'
import ExpensePopup from './ExpensePopup'
import {inject, observer} from 'mobx-react'
import ExpensePanels from './ExpensePanels';
import Loader from './Loader';



function Home(props) {
    const [expenses, setExpenses] = React.useState([])
    const [showLoader, setLoader] = React.useState(true)


    useEffect(async () => {
        const expenses = await props.getExpenses()
        setExpenses(expenses)
        setLoader(false)
    }, [])

    return (
        <div id='home-container'>
            <MonthSelector />
            <ExpenseTableHeader />
            {showLoader ? <Loader /> : <ExpensePanels expenses={expenses} />}
            <FabButton />
        </div>
    )
}

export default Home