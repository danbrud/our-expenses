import React, { Component } from 'react'
import MonthSelector from './MonthSelector'
import { inject, observer } from 'mobx-react'
import FabButton from './FabButton'
import Report from './Report'
import Loader from './Loader'

@inject('expensesStore')
@observer
class Reports extends Component {

    componentDidMount = () => {
        if(this.isExpensesCurrent()) { return }

        this.props.expensesStore.getExpenses()
    }

    isExpensesCurrent = () => {
        if(this.props.expensesStore.expenses.length) {
            return this.props.expensesStore.currentMonth === new Date(this.props.expensesStore.expenses[0].date).getMonth() 
                        ? true : false
        }
    }

    render() {
        return(
            <div>
                <h1>Reports</h1>
                <MonthSelector />
                {this.props.expensesStore.expenses.length ? <Report expenses={this.props.expensesStore.expenses}/> : <Loader />}
                <FabButton />
            </div>
        )
    }
}

export default Reports