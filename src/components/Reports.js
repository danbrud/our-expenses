import React from 'react'
import MonthSelector from './MonthSelector'
import FabButton from './FabButton'
import Loader from './Loader'
import Categories from './Categories'
import './../styles/Reports.css'
import TableHeader from './general/TableHeader'


function Reports(props) {

    // componentDidMount = async () => {
    //     if(!this.isExpensesCurrent()) {
    //         await this.props.expensesStore.getExpenses()
    //     }

    //     this.state.showLoader = false
    // }

    // isExpensesCurrent = () => {
    //     if(this.props.expensesStore.expenses.length) {
    //         return this.props.expensesStore.currentMonth === new Date(this.props.expensesStore.expenses[0].date).getMonth()
    //                     ? true : false
    //     }
    //     // return false
    // }

    return (
        <div id="reports-container">
            <MonthSelector currentDate={props.currentDate} changeCurrentDate={props.changeCurrentDate} />
            <TableHeader />
            {
                props.expenses.length
                    ? <Categories expenses={props.expenses} />
                    : props.isLoading
                        ? < Loader />
                        : <div className="no-expense-msg ">אין הוצאות לחודש זה</div>
            }
            <FabButton />
        </div>
    )
}

export default Reports