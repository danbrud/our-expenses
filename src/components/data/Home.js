import React from 'react'
import TableHeader from '../general/TableHeader';
import FabButton from '../FabButton'
import MonthSelector from '../general/MonthSelector';
import DataPanels from './DataPanels';
import Loader from '../Loader';
import '../../styles/Expense.css'
import NoData from '../general/NoData';
import { CONSTS } from '../../utils/consts';
import { selectAllExpenses } from '../../state/slices/expensesSlice';
import { useSelector } from 'react-redux';



function Home(props) {
    const { currentDate, changeCurrentDate, isLoading } = props
    const expenses = useSelector(selectAllExpenses)

    return (
        <div id='home-container'>
            <MonthSelector currentDate={currentDate} changeCurrentDate={changeCurrentDate} />
            <TableHeader type={CONSTS.singularExpense} />
            {
                expenses.length
                    ? <DataPanels data={expenses} type={CONSTS.pluralExpense}/>
                    : isLoading
                        ? <Loader />
                        : <NoData type={CONSTS.pluralExpense} />
            }
            <FabButton />
        </div>
    )
}

export default Home