import React from 'react'
import MonthSelector from './MonthSelector'
import FabButton from './FabButton'
import Loader from './Loader'
import Categories from './Categories'
import './../styles/Reports.css'


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
            <MonthSelector currentMonth={props.currentMonth} changeCurrentMonth={props.changeCurrentMonth} />
            <div className="category-table" id="expense-table-header">
                <div>סכום</div>
                <div>קטגוריה</div>
            </div>
            {props.expenses.length ? <Categories expenses={props.expenses} /> : <Loader />}
            <FabButton />
        </div>
    )
}

export default Reports